import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import * as XLSX from 'xlsx';
import type { ExportExcelProps } from './excel.type';

function ExportExcel<T extends object>({ data, fileName, noCrear }: ExportExcelProps<T>) {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = () => {
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet<T>(data);
        const wb: XLSX.WorkBook = { Sheets: { data: ws }, SheetNames: ['data'] };
        const excelBuffer: ArrayBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: fileType });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName + fileExtension;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 0);
    };

    return (
        <button className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-green-500 hover:bg-white hover:text-green-500 focus:z-10 focus:ring-2 ${!noCrear ? 'rounded-e-lg' : 'rounded-lg'}`}
            onClick={exportToCSV}>
            <PiMicrosoftExcelLogoFill className='me-2' /> Excel
        </button>
    );
};

export default ExportExcel;

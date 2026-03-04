function TableSkeleton() {
    return (
        <div role="status" className="w-full animate-pulse flex justify-center items-center border border-gray-200 rounded-lg flex-col">
            <div className='h-10 bg-gray-100 w-full'></div>
            {[...Array(3)].map((_, i) => (
                <div key={i} className='flex flex-row my-3'>
                    <div className='flex my-2'>
                        <div className='h-9 w-9 bg-gray-200 rounded-full'></div>
                        <div className='h-9 w-9 bg-gray-200 rounded-full'></div>
                    </div>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className='p-4 flex flex-col'>
                            <div className="h-2 bg-gray-200 my-1 rounded-full w-28"></div>
                            <div className="h-2 bg-gray-200 rounded-full w-28"></div>
                        </div>
                    ))}
                </div>
            ))}
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default TableSkeleton;
import imagen from "@/shared/assets/img/imagen";

export default function ContentLogo() {
    return (
        <div className="w-full sm:w-1/2 hidden sm:flex flex-col items-center justify-center p-8 text-gray-800">
            <div className="flex flex-col items-center gap-10">
                <div className="relative">
                    <div className="relative p-6 rounded-3xl backdrop-blur-sm border border-white/10">
                        <img
                            src={imagen.logoPrisma}
                            alt="Logo"
                            className="h-40 w-40 object-contain"
                        />
                    </div>
                </div>
                <h2 className="text-5xl font-bold leading-tight">
                    PrismaU Club
                </h2>
            </div>
        </div>
    );
}

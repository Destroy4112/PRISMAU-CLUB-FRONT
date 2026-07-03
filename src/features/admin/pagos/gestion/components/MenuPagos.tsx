import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';
import { MENUS_PAGO } from './MenusPago';

export default function MenuOpciones() {

    return (
        <div className="bg-linear-to-br from-gray-50 via-gray-100 to-gray-200 rounded py-5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MENUS_PAGO.map((item, index) => (
                        <Link to={item.path} key={index} className="group relative">
                            <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">

                                <div className={`absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                                </div>

                                <div className="relative p-5">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <FaArrowRight className="w-5 h-5 text-white transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900  transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 transition-colors duration-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="mt-3 pt-2 border-t border-gray-200 group-hover:border-white/30 transition-colors duration-300">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-500 transition-colors duration-300">
                                                Acceder ahora
                                            </span>
                                            <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-white flex items-center justify-center transition-all duration-300">
                                                <FaArrowRight className="w-3 h-3 text-gray-400  transition-colors duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                    <div className={`absolute inset-0 bg-linear-to-bl ${item.gradient} rounded-bl-full`}></div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
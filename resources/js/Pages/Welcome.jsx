import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, courses }) {
    return (
        <>
            <Head title="DravDev Academy" />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="p-6 text-right">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dashboard</Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</Link>
                            <Link href={route('register')} className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Nossos Cursos</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course) => (
                            <Link href={route('course.show', course.slug)} key={course.id} className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex flex-col motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                                
                                <div className="h-40 w-full bg-gray-200 rounded-md mb-4 overflow-hidden">
                                     {course.image_path ? (
                                        <img src={`/storage/${course.image_path}`} alt={course.title} className="w-full h-full object-cover" />
                                     ) : (
                                        <div className="flex items-center justify-center h-full text-gray-500">Sem imagem</div>
                                     )}
                                </div>

                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{course.title}</h2>
                                <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed truncate">
                                    {course.description || 'Sem descrição disponível.'}
                                </p>
                                <div className="mt-4 text-red-500 text-sm font-bold flex items-center">
                                    Assistir agora <span className="ml-1">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
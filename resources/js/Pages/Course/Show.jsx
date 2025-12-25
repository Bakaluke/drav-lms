import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Show({ auth, course }) {
    const firstLesson = course.lessons.length > 0 ? course.lessons[0] : null;
    const [currentLesson, setCurrentLesson] = useState(firstLesson);

    return (
        <>
            <Head title={course.title} />
            
            <div className="min-h-screen bg-gray-900 text-white">
                <nav className="bg-gray-800 border-b border-gray-700 p-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-gray-400 hover:text-white">
                            &larr; Voltar
                        </Link>
                        <h1 className="font-bold text-xl">{course.title}</h1>
                    </div>
                    <div className="text-sm text-gray-400">
                        {course.lessons.length} Aulas
                    </div>
                </nav>

                <div className="max-w-7xl mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="bg-black rounded-lg overflow-hidden shadow-2xl aspect-video relative">
                            {currentLesson ? (
                                <video 
                                    key={currentLesson.id}
                                    controls 
                                    autoPlay 
                                    className="w-full h-full"
                                    src={`/storage/${currentLesson.video_path}`}
                                >
                                    Seu navegador não suporta vídeos.
                                </video>
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500">
                                    Este curso ainda não tem aulas.
                                </div>
                            )}
                        </div>

                        <div className="mt-6">
                            <h2 className="text-2xl font-bold">{currentLesson?.title}</h2>
                            <p className="mt-2 text-gray-400">
                                {currentLesson?.description || 'Sem descrição para esta aula.'}
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 h-fit max-h-[600px] overflow-y-auto">
                        <h3 className="font-semibold text-lg mb-4 text-gray-300">Conteúdo do Curso</h3>
                        <div className="flex flex-col gap-2">
                            {course.lessons.map((lesson) => (
                                <button
                                    key={lesson.id}
                                    onClick={() => setCurrentLesson(lesson)}
                                    className={`text-left p-3 rounded-md transition-all flex items-center gap-3 ${
                                        currentLesson?.id === lesson.id 
                                        ? 'bg-red-600 text-white' 
                                        : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                                    }`}
                                >
                                    <div className="w-6 h-6 flex items-center justify-center bg-black/20 rounded-full text-xs">
                                        {currentLesson?.id === lesson.id ? '▶' : lesson.sort_order + 1}
                                    </div>
                                    
                                    <div className="flex-1">
                                        <p className="font-medium text-sm truncate">{lesson.title}</p>
                                        <p className="text-xs opacity-70">{lesson.duration_minutes} min</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
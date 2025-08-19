import React from 'react';

const MediaSection = () => {
    return (
        <div className="flex flex-col items-center bg-purple-600 p-8 rounded-lg">
            <div className="w-full max-w-2xl mb-6">
                <div className="bg-black aspect-w-16 aspect-h-9 flex justify-center items-center rounded-md">
                    {/* Componente de vídeo usando iframe */}
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Substituir com o link do vídeo desejado caso seja do youtube, senão vamos precisar mudar esse formato
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Video"
                    ></iframe>
                </div>
            </div>
            <h2 className="text-white text-2xl mb-4">Estamos na mídia</h2>
            <p className="text-white text-center mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">
                Solicite seu orçamento!
            </button>
        </div>
    );
}

export default MediaSection;

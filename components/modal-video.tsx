"use client"
import React, { useRef, useEffect, useState } from "react";

interface ModalVideoProps {
  video: string; // Ruta del archivo de video
  videoWidth: number; // Ancho del video
  videoHeight: number; // Altura del video
}

const ModalVideo: React.FC<ModalVideoProps> = ({
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null); // Referencia al elemento de video para acceder a él
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // Establecer el volumen del video (opcional)
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space" && videoRef.current) {
        togglePlay();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    const progressBar = document.getElementById("progress-bar");
    if (videoRef.current && progressBar) {
      const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      progressBar.style.width = `${percentage}%`;
    }
  };

  return (
    <div className="flex justify-center items-center relative">
      <div className="relative w-full max-w-6xl" data-aos="fade-up" data-aos-delay="200">
        <video
          ref={videoRef}
          width={videoWidth}
          height={videoHeight}
          autoPlay // Inicia la reproducción automáticamente
          loop // Repite el video
          className="rounded-lg w-full h-full object-cover p-6"
          onTimeUpdate={handleTimeUpdate} // Actualiza la barra de progreso
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Barra de progreso personalizada */}
        <div className="w-full h-1 bg-gray-300 absolute bottom-0 left-0">
          <div id="progress-bar" className="h-full bg-blue-500" style={{ width: "0%" }}></div>
        </div>
        {/* Botón de reproducción/pausa */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="w-14 h-14 cursor-pointer flex items-center justify-center" onClick={togglePlay}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-10 w-10 ${isPlaying ? 'text-black' : 'text-white'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isPlaying ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.07612 8.61732C8 8.80109 8 9.03406 8 9.5V14.5C8 14.9659 8 15.1989 8.07612 15.3827C8.17761 15.6277 8.37229 15.8224 8.61732 15.9239C8.80109 16 9.03406 16 9.5 16C9.96594 16 10.1989 16 10.3827 15.9239C10.6277 15.8224 10.8224 15.6277 10.9239 15.3827C11 15.1989 11 14.9659 11 14.5V9.5C11 9.03406 11 8.80109 10.9239 8.61732C10.8224 8.37229 10.6277 8.17761 10.3827 8.07612C10.1989 8 9.96594 8 9.5 8C9.03406 8 8.80109 8 8.61732 8.07612C8.37229 8.17761 8.17761 8.37229 8.07612 8.61732ZM13.0761 8.61732C13 8.80109 13 9.03406 13 9.5V14.5C13 14.9659 13 15.1989 13.0761 15.3827C13.1776 15.6277 13.3723 15.8224 13.6173 15.9239C13.8011 16 14.0341 16 14.5 16C14.9659 16 15.1989 16 15.3827 15.9239C15.6277 15.8224 15.8224 15.6277 15.9239 15.3827C16 15.1989 16 14.9659 16 14.5V9.5C16 9.03406 16 8.80109 15.9239 8.61732C15.8224 8.37229 15.6277 8.17761 15.3827 8.07612C15.1989 8 14.9659 8 14.5 8C14.0341 8 13.8011 8 13.6173 8.07612C13.3723 8.17761 13.1776 8.37229 13.0761 8.61732Z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;

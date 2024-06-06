"use client";

import { useState, useRef } from "react";

interface ModalVideoProps {
  video: string; // Ruta del archivo de video
  videoWidth: number; // Ancho del video
  videoHeight: number; // Altura del video
}

export default function ModalVideo({
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null); // Referencia al elemento de video para acceder a Ã©l
  const [videoPlaying, setVideoPlaying] = useState<boolean>(true); // Estado para controlar si el video estÃ¡ en reproducciÃ³n

  const handlePlay = () => {
    setVideoPlaying(true);
  };

  const handlePause = () => {
    // No permitir que el video se pause
    videoRef.current?.play();
  };

  return (
    <div className="flex justify-center items-center">
      {/* video perce */}
      <div>
        <div
          className="relative flex justify-center items-center w-full h-full max-w-6xl "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <video
            ref={videoRef}
            width={videoWidth}
            height={videoHeight}
            autoPlay // Inicia la reproducciÃ³n automÃ¡ticamente
            muted // Puedes aÃ±adir esto si no deseas que el audio del video se reproduzca automÃ¡ticamente
            loop // Repite el video
            className="rounded-lg w-full h-full object-cover p-6 "
            // Maneja el evento cuando el video termina
            onPlay={handlePlay} // Maneja el evento cuando el video comienza a reproducirse
            onPause={handlePause} // Maneja el evento cuando la reproducciÃ³n del video se pausa
          >
            {/* Video a reproducir en el modal */}
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

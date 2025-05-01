"use client"

import { useState, useEffect } from "react"

interface VideoPlayerProps {
  videoId: string
  title?: string
}

const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="video-container aspect-video">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-night-gray">
          <div className="w-12 h-12 border-4 border-antique-gold/30 border-t-antique-gold rounded-full animate-spin"></div>
        </div>
      )}
      <iframe
        className={`w-full h-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || "Vidéo Aïcha Kandicha"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
      ></iframe>
    </div>
  )
}

export default VideoPlayer

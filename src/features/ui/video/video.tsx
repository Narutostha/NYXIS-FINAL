import { useInView } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface VideoUIProps {
  src: string;
  thumbnail?: string;
  autoplay?: boolean;
  muted?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function VideoUI({
  src,
  thumbnail,
  autoplay = true,
  muted = true,
  className,
  style,
}: VideoUIProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldUseImage, setShouldUseImage] = useState(false);
  const isInView = useInView(videoRef);

  const isSafari = () => {
    if (typeof window === 'undefined') return false;
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
  };

  useEffect(() => {
    if (!videoRef.current) return;

    const playVideo = async () => {
      try {
        if (isInView && autoplay) {
          await videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      } catch (error) {
        console.error('Video playback error:', error);
        setShouldUseImage(true);
      }
    };

    if (isSafari()) {
      const video = videoRef.current;
      if (video) {
        video.playsInline = true;
        video.muted = muted;
        video.autoplay = autoplay;
      }
    }

    playVideo();
  }, [isInView, autoplay, muted]);

  if (shouldUseImage) {
    return (
      <Image
        src={thumbnail || src}
        alt="Video thumbnail"
        width={500}
        height={300}
        className={className}
        style={{ ...style, objectFit: 'cover' }}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      poster={thumbnail}
      loop
      muted={muted}
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
import { useInView } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

interface VideoUIProps extends React.HTMLAttributes<HTMLVideoElement> {
  src: string;
  thumbnail?: string;
  autoplay?: boolean;
  muted?: boolean;
}

export function VideoUI({
  src,
  thumbnail,
  autoplay = true,
  muted = true,
  ...props
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
    return <img src={thumbnail || src} alt="Video thumbnail" {...props} />;
  }

  return (
    <video
      ref={videoRef}
      className={props.className}
      poster={thumbnail}
      loop
      muted={muted}
      playsInline
      preload="metadata"
      {...props}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
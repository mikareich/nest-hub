import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ImageGalleryProps {
  imageURLs: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = function ({ imageURLs }) {
  const getRandomImageIndex = (): number =>
    Math.round(Math.random() * (imageURLs.length - 1));

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Start with a random image

  useEffect(() => {
    const delay = 5000;

    const interval = setInterval(() => {
      // change the current image index
      setCurrentImageIndex(getRandomImageIndex());
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-0">
      <div className="relative w-full h-full">
        {imageURLs.map((imageURL, index) => (
          <Image
            key={imageURL}
            src={imageURL}
            layout="fill"
            objectFit="cover"
            className={`transition duration-500 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

import React, { useEffect, useState } from 'react';

const BackgroundSlideshow = ({ images, interval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(changeImage, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (

        <img src={image} alt="" key={index} className={`absolute object-cover w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;

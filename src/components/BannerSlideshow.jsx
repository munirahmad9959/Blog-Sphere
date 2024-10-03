import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const BannerSlideshow = ({ slides, interval = 2000 }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const changeSlide = () => {
            setIsVisible(false); // Start fading out
            setTimeout(() => {
                setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
                setIsVisible(true); // Start fading in
            }, 300); // Duration of fade out before changing slide
        };

        const intervalId = setInterval(changeSlide, interval);

        return () => clearInterval(intervalId);
    }, [slides, interval]);

    const currentSlide = slides[currentSlideIndex];

    return (
        <div className="w-full h-full relative flex flex-col">
            <div className={`imgContainer h-1/2 absolute overflow-hidden transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                    src={currentSlide.image}
                    alt="Banner" width={1000} height={1000}
                    className="w-full h-full object-cover bg-center bg-cover"
                />
                <div className="absolute bottom-4 left-4 bg-yellow-500 rounded-full px-7 py-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 64 64" className="gq"><path fill="#0f0f0f" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path></svg>
                    <span className="ml-2">Member-only story</span>
                </div>
            </div>

            <div className={`imgContent absolute top-1/2 w-full h-1/2 ${currentSlide.color} transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text mt-5 px-3">
                    <h1 className="text-[24px] font-semibold text-[#242424] leading-[28px] tracking-tighter">{currentSlide.title}</h1>

                    <div className="avatar flex items-center gap-5 mt-20">
                        <Image src="/noavatar.png" alt="avatar" width={50} height={50} className='w-[50px] h-[50px] rounded-full bg-gray-600' />
                        <div className="titles">
                            <p className="text-[#242424] text-[18px] leading-[24px] tracking-tighter">{currentSlide.author}</p>
                            <p className="text-[#242424] text-[18px] leading-[24px] tracking-tighter">{currentSlide.jobTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSlideshow;

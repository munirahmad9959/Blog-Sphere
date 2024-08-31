import React, { useEffect, useState } from 'react';

const BannerSlideshow = ({ slides, interval = 2000 }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const changeSlide = () => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        };

        const intervalId = setInterval(changeSlide, interval);

        return () => clearInterval(intervalId);
    }, [slides, interval]);

    const currentSlide = slides[currentSlideIndex];

    return (
        <div className="max-w-full max-h-full flex flex-col relative">
            <div className="imgContainer w-full h-[350px] overflow-hidden relative">
                <img
                    src={currentSlide.image}
                    alt="Banner"
                    className="w-full h-full object-cover bg-center bg-cover"
                />
                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00000099] to-transparent"></div> */}

                {/* Member-only story bullet */}
                <div className="absolute bottom-4 left-4 bg-yellow-500 rounded-full px-7 py-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 64 64" className="gq"><path fill="#0f0f0f" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path></svg>
                    <span className="ml-2">Member-only story</span>
                </div>
            </div>

            <div className={`absolute h-[350px] top-[350px] w-full content flex flex-col ${currentSlide.color}`}>
                <div className="text mt-5 px-3">
                    <h1 className="text-[24px] font-semibold text-[#242424] leading-[28px] tracking-tighter">{currentSlide.title}</h1>

                    <div className="avatar flex items-center gap-5 mt-20">
                        <img src="/noavatar.png" alt="avatar" className='w-[50px] h-[50px] rounded-full bg-gray-600' />
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

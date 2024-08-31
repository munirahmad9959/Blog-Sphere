"use client";

import React, { useEffect, useState } from 'react';
import BannerSlideshow from './BannerSlideshow';

const BannerMembership = () => {
    const slides = [
        {
            image: 'https://i.pinimg.com/236x/c3/46/29/c34629b77eee33b63d492eedd66793e2.jpg',
            title: "Can Entrepreneurship Classes Unlock the Secrets to Building the Next Big Startup?",
            author: "Dr. Emily Carter",
            jobTitle: "Serial Entrepreneur and Startup MentorT",
            color: 'bg-[#2d89b4] bg-opacity-50',
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1665329006985-04f95dd59402?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: "Why Blogging Still Matters in 2024",
            author: "Lisa Morgan",
            jobTitle: "Content Strategist and Digital Marketer",
            color: "bg-[#DEB887]",
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1663090894347-35d4ecc2c622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnRhbCUyMHdlbGwlMjBiZWluZ3xlbnwwfHwwfHx8MA%3D%3D',
            title: "The Hidden Impact of Social Media on Mental Health",
            author: "Dr. Sarah Thompson",
            jobTitle: "Clinical Psychologist and Researcher",
            color: "bg-[#FFCC99]",
        },
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [slides.length, currentSlideIndex]);

    const currentSlide = slides[currentSlideIndex];

    return (
        <div className="container max-w-full flex">
            <div className={`leftContainer flex-initial w-[65%] h-[65%] border-black border-r ${currentSlide.color}`}>
                <div className="container mt-12 ml-7 px-5">
                    <h1 className='font-semibold text-[70px] font-[apple] text-[#242424] leading-[74px] tracking-tighter'>
                        Support human
                    </h1>
                    <h1 className='font-semibold text-[70px] font-[apple] text-[#242424] leading-[74px] tracking-tighter'>
                        stories
                    </h1>

                    <div className="text mt-60 w-5/6">
                        <p className='text-gray-500 font-serif text-[27px] leading-[30px] font-normal tracking-tighter'>
                            Become a member to read without limits or ads, fund great writers, and join a global community of people who care about high-quality storytelling.
                        </p>
                    </div>
                    <div className="btn flex gap-3 py-5">
                        <button className='px-12 rounded-full py-3 bg-gray-900 hover:bg-gray-950 text-white mt-14'>
                            Get Started
                        </button>
                        <button className='px-12 rounded-full py-3 bg-white border border-black text-black mt-14'>
                            View plans
                        </button>
                    </div>
                </div>
            </div>
            <div className="rightContainer flex-none w-[35%] h-[400px]">
                <BannerSlideshow slides={slides} interval={3000} />
            </div>
        </div>
    );
};

export default BannerMembership;

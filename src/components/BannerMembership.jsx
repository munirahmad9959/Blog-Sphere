"use client"

import React from 'react'
import BackgroundSlideshow from './BackgroundSlideshow'

const BannerMembership = () => {
    const images = [
        'https://i.pinimg.com/736x/2b/93/c1/2b93c1134f39a08fbe90ab4114d63207.jpg',  // Replace with actual image paths
        'https://i.pinimg.com/236x/9d/34/61/9d3461c635aa3ededb5036b33cb65250.jpg',
        'https://i.pinimg.com/236x/60/22/c1/6022c19647608557420cd963cbe471b4.jpg'
    ];

    return (
        <>
            <div className="container w-full flex">
                <div className="leftContainer flex-initial w-[65%] border border-black">
                    <div className="container mt-12 ml-7 px-5">
                        <h1 className='font-semibold text-[70px] font-[apple] text-[#242424] leading-[74px]  tracking-tighter'>Support human </h1>
                        <h1 className='font-semibold text-[70px] font-[apple] text-[#242424] leading-[74px]  tracking-tighter'>stories</h1>

                        <div className="text mt-60 w-5/6 ">
                            <p className='text-gray-500 font-serif text-[27px] leading-[30px] font-normal tracking-tighter'>Become a member to read without limits or ads, fund great writers, and join a global community of people who care about high-quality storytelling.</p>
                        </div>
                        <div className="btn flex gap-3">
                            <button className='px-12 rounded-full py-3 bg-gray-900 hover:bg-gray-950 text-white mt-14'>Start Reading</button>
                            <button className='px-12 rounded-full py-3 bg-white border border-black text-black mt-14'>View plans</button>
                        </div>
                    </div>
                </div>
                <div className="rightContainer flex-none w-[35%] h-[500px]">
                    <div className="imgContainer w-full relative">
                        <BackgroundSlideshow images={images} interval={5000} />
                    </div>
                    <div className="imgContent">

                    </div>
                </div>
            </div >
        </>
    )
}

export default BannerMembership

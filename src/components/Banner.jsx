"use client"

import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="container max-w-full h-[77%] flex box-border border-b-[1px]">
        <div className="leftContainer flex-1 mt-20 ml-20">
          <h1 className='font-normal text-[120px] font-playfair text-[#242424] leading-[100px]  tracking-tighter'>Human <br /> stories & ideas</h1>
          <div className='text mt-10 font-sans text-xl font-medium'>
            <p>A place to read, write, and deepen your understanding</p>
          </div>
          <div className="btn">
            <button className='px-12 rounded-full py-3 bg-black text-white mt-14'>Start Reading</button>
          </div>
        </div>
        <div className="rightContainer">
          <img src="/medium-banner-img.webp" width={460} height={600} alt="" className="object-cover -mt-12" />
        </div>
      </div >
    </>
  )
}

export default Banner

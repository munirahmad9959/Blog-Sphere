"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import WriteModal from '@/modals/WriteModal';
import SignInModal from '@/modals/SignInModal';


const Navbar = () => {
  const [isWriteModalVisible, setWriteModalVisible] = useState(false);
  const [isSignInModalVisible, setSignInModalVisible] = useState(false);


  const handleWriteClick = () => {
    setWriteModalVisible(true);
    setSignInModalVisible(false);
  }

  const handleSignInClick = () => {
    setSignInModalVisible(true);
    setWriteModalVisible(false);
  }

  const closeModal = () => {
    setWriteModalVisible(false);
    setSignInModalVisible(false)
  }

  return (
    <>
      <nav className='flex justify-between items-center w-[100vw] h-[75px] px-16 border-b-[1px] border-black ' style={{ fontFamily: 'CustomFont, sans-serif' }}>
        <Link href={"/"}>
          <span className='font-semibold font-serif text-3xl'>BlogSphere</span>
        </Link>
        <ul className='flex gap-5 items-center'>
          <li><Link href={"/about"}>Our Story</Link></li>
          <li><Link href={"/membership"}>Membership</Link></li>
          <li onClick={handleWriteClick} className='cursor-pointer'>Write</li>
          <li className='cursor-pointer' onClick={handleSignInClick}>Sign in</li>
          <li><button className='px-3 rounded-full py-2 bg-black text-white'>Get Started</button></li>
        </ul>
      </nav>

      <WriteModal isVisible={isWriteModalVisible} onClose={closeModal} />
      <SignInModal isVisible={isSignInModalVisible} onClose={closeModal} />

    </>
  )
}

export default Navbar

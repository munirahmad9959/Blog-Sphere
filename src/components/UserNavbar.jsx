import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, setLoading } from '../../state';
import { useRouter } from 'next/navigation';
import PlayLoading from '@/app/PlayLoading';

const UserNavbar = ({ email }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef(null);

  const dispatch = useDispatch();
  const router = useRouter();
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setShowDropDown(false); // Close the dropdown if clicked outside
      }
    };

    // Add event listener when dropdown is open
    if (showDropDown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropDown]);

  const handleImageOptions = () => {
    setShowDropDown(!showDropDown);
  };

  const maskEmail = (email) => {
    const [name, domain] = email.split('@');
    const maskedName = name.slice(0, 2) + '••••••••';
    return `${maskedName}@${domain}`;
  };

  const handleLogout = async () => {
    dispatch(setLoading(true)); // Start loading

    try {
      await dispatch(logoutUser()); // Dispatch logoutUser and wait for it

      setTimeout(() => {
        router.push('/'); // Navigate to home after logout
        dispatch(setLoading(false)); // Stop loading after navigation
      }, 1000);
    } catch (err) {
      console.error('Logout failed:', err);
      dispatch(setLoading(false)); // Stop loading in case of an error
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <span className='font-semibold font-serif text-3xl'>BlogSphere</span>
        <PlayLoading />
      </div>
    );
  }

  return (
    <>
      <nav className='flex justify-between items-center w-[100vw] h-[55px] px-5 border-b-[1px] border-gray-300 z-10 relative bg-[#F7F4ED]' style={{ fontFamily: 'CustomFont, sans-serif' }}>
        <div className="logo flex items-center">
          <Link href={"/"}>
            <span className='font-semibold font-serif text-3xl'>BlogSphere</span>
          </Link>
          <span className='pl-5'>
            <div className="input flex items-center bg-[#e7e2e2] py-2 rounded-full px-3 ">
              <svg xmlns="http://www.w3.org/2000/svg" className='text-gray-400' width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z" clipRule="evenodd"></path>
              </svg>
              <input type="text" placeholder="Search" className="bg-inherit text-gray-400 ml-3 outline-none" />
            </div>
          </span>
        </div>

        <ul className='flex gap-7 items-center font-normal text-base font-sans text-gray-700 px-7 cursor-pointer'>
          {/* Write Svg */}
          <li className='flex items-center'>
            <Link href={"/about"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-label="Write">
                <path fill="currentColor" d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"></path>
                <path stroke="currentColor" d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"></path>
              </svg>
            </Link>
            <span className='text-gray-500 text-base ml-3'>Write</span>
          </li>

          {/* Notification Bell Svg */}
          <li>
            <Link href={"/membership"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-label="Notifications">
                <path stroke="currentColor" strokeLinecap="round" d="M15 18.5a3 3 0 1 1-6 0"></path>
                <path stroke="currentColor" strokeLinejoin="round" d="M5.5 10.532V9a6.5 6.5 0 0 1 13 0v1.532c0 1.42.564 2.782 1.568 3.786l.032.032c.256.256.4.604.4.966v2.934a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.934c0-.363.144-.71.4-.966l.032-.032A5.35 5.35 0 0 0 5.5 10.532Z"></path>
              </svg>
            </Link>
          </li>

          {/* Profile img */}
          <li className='relative'>
            <Image src={'/noavatar.png'} width={30} height={30} alt='profileImg' className='rounded-full hover:bg-gray-950 cursor-pointer' onClick={handleImageOptions} />
            {showDropDown && (
              <div ref={dropDownRef} className="dropDown absolute right-0 mt-3 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                <ul className='space-y-2'>
                  <li className='hover:bg-gray-100 px-1 py-1 rounded'>Profile</li>
                  <li className='hover:bg-gray-100 px-1 py-1 rounded'>Library</li>
                  <li className='hover:bg-gray-100 px-1 py-1 rounded'>Stories</li>
                  <li className='hover:bg-gray-100 px-1 py-1 rounded cursor-pointer' onClick={handleLogout}>
                    Sign out
                    <span className='block text-sm text-gray-500 mt-1'>{maskEmail(email)}</span>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default UserNavbar;

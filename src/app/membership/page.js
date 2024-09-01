"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import BannerSlideshow from '@/components/BannerSlideshow';

const SignInModal = ({ isVisible, onClose, handleSignInWithEmail, handleWriteClick }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to reset overflow when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-white bg-opacity-30 flex justify-center z-20'>
      <div className='bg-white p-6 rounded-lg flex items-center flex-col w-[50vw] relative max-h-[100vh] overflow-auto scrollBar text-black'>
        <div className="closeForm absolute top-3 right-3">
          <svg onClick={() => onClose()} width="29" height="29" className="text-black cursor-pointer ie fq if hm"><path fillRule="evenodd" d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"></path></svg>
        </div>
        <h2 className='text-3xl font-serif mt-9 mb-7'>Welcome back.</h2>
        <div className="flex flex-col items-center gap-2 p-10 ">

          <button className="flex items-center bg-slate-50 text-black w-[22rem] border border-gray-300 rounded-full shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-6 w-6 bt">
              <g id="google">
                <g id="google-vector" fillRule="evenodd" clipRule="evenodd">
                  <path id="Shape" fill="#4285F4" d="M20.64 12.205q-.002-.957-.164-1.84H12v3.48h4.844a4.14 4.14 0 0 1-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615"></path>
                  <path id="Shape_2" fill="#34A853" d="M12 21c2.43 0 4.468-.806 5.957-2.18L15.05 16.56c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H3.958v2.332A9 9 0 0 0 12.001 21"></path>
                  <path id="Shape_3" fill="#FBBC05" d="M6.964 13.712a5.4 5.4 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71V7.96H3.957A9 9 0 0 0 3 12.002c0 1.452.348 2.827.957 4.042z"></path>
                  <path id="Shape_4" fill="#EA4335" d="M12 6.58c1.322 0 2.508.455 3.441 1.346l2.582-2.58C16.463 3.892 14.427 3 12 3a9 9 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71"></path>
                </g>
              </g>
            </svg>
            <div className="mx-auto text"><span>Sign in with Google</span></div>
          </button>

          <button className="flex items-center bg-slate-50 text-black w-[22rem] border border-gray-300 rounded-full shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-6 w-6 bt">
              <g id="facebook">
                <g id="facebook-vector">
                  <path fill="#1877F2" d="M22 12.002c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54v-2.891h2.54V9.799c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.989c4.78-.75 8.437-4.888 8.437-9.879"></path>
                  <path fill="#fff" d="m15.893 14.893.443-2.891h-2.773v-1.876c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.196-2.238-.196c-2.284 0-3.777 1.385-3.777 3.89v2.204h-2.54v2.89h2.54v6.989a10 10 0 0 0 3.124 0v-6.988z"></path>
                </g>
              </g>
            </svg>
            <div className="mx-auto text"><span>Sign in with Facebook</span></div>
          </button>

          <button className="flex items-center bg-slate-50 text-black w-[22rem] border border-gray-300 rounded-full shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-6 w-6 bt"><g id="apple"><path id="apple-vector" fill="currentColor" d="M18.52 8.23c-.106.086-1.993 1.183-1.993 3.62 0 2.82 2.401 3.818 2.473 3.843-.011.06-.381 1.366-1.266 2.696-.788 1.17-1.612 2.34-2.865 2.34s-1.575-.751-3.022-.751c-1.41 0-1.91.775-3.056.775S6.845 19.67 5.925 18.34C4.86 16.778 4 14.35 4 12.048c0-3.694 2.329-5.653 4.621-5.653 1.218 0 2.233.825 2.998.825.728 0 1.863-.874 3.248-.874.525 0 2.412.05 3.654 1.885m-4.31-3.448c.572-.701.978-1.674.978-2.647 0-.135-.011-.272-.035-.382-.933.036-2.042.64-2.71 1.44-.526.616-1.016 1.589-1.016 2.575 0 .148.024.296.035.344a1.4 1.4 0 0 0 .25.025c.837 0 1.89-.578 2.497-1.355"></path></g></svg>
            <div className="mx-auto text"><span>Sign in with Apple</span></div>
          </button>

          <button className="flex items-center bg-slate-50 text-black w-[22rem] border border-gray-300 rounded-full shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-6 w-6 bt"><path fill="#242424" d="M13.346 10.932 18.88 4.5h-1.311l-4.805 5.585L8.926 4.5H4.5l5.803 8.446L4.5 19.69h1.311l5.074-5.898 4.053 5.898h4.426zM11.55 13.02l-.588-.84-4.678-6.693h2.014l3.776 5.4.588.842 4.907 7.02h-2.014z"></path></svg>
            <div className="mx-auto text"><span>Sign in with X</span></div>
          </button>


          <button className="flex items-center bg-slate-50 text-black w-[22rem] border border-gray-300 rounded-full shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-6 w-6  bt">
              <g id="email-icon">
                <g id="Group 10123" stroke="#242424">
                  <rect id="Rectangle 1488" width="17" height="13" x="3.5" y="5.505" rx="1"></rect>
                  <path id="Vector 107" strokeLinecap="round" d="m3.5 8.005 8.5 6 8.5-6"></path>
                </g>
              </g>
            </svg>
            <div className="text mx-auto"><span onClick={handleSignInWithEmail}>Sign in with email</span></div>
          </button>

        </div>
        <div className="signIn mt-0 leading-3">
          <span className="font-sans">No account?
            <button className="ml-2 text-green-800 font-semibold" onClick={handleWriteClick}>Create one</button>
          </span>
        </div>

        <div className='forgot-email text-gray-600 text-sm mt-16'><p>Forgot email or trouble signing in? <span className='underline cursor-pointer'>Get help</span>.</p></div>

        <div className="termsConditions text-gray-600 mt-[4.2rem] text-center  mx-auto text-xs">
          <p className='px-16'>Click “Sign in” to agree to BlogSphere's <span className='underline cursor-pointer'>Terms of Service</span> and acknowledge that BlogSphere's <span className='underline cursor-pointer'>Privacy Policy</span> applies to you.</p>
        </div>
      </div>
    </div>
  );
};


const WriteModal = ({ isVisible, onClose, handleSignInClick, handleSignUpWithEmail }) => {
  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-white bg-opacity-50 flex justify-center z-20'>
      <div className='bg-white p-6 rounded-lg flex items-center flex-col w-[50vw] min-h-screen relative text-black'>
        <div className="closeForm absolute top-3 right-3">
          <svg onClick={() => onClose()} width="29" height="29" className="text-black cursor-pointer ie fq if hm"><path fillRule="evenodd" d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"></path></svg>
        </div>
        <h2 className='text-3xl font-serif mt-24 mb-[3rem]'>Create account to start writing</h2>
        <div className="flex flex-col items-center gap-2 p-10 ">

          <button className="flex items-center bg-slate-50 text-black w-[22rem] border border-gray-300 rounded-full shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-6 w-6 bt">
              <g id="google">
                <g id="google-vector" fillRule="evenodd" clipRule="evenodd">
                  <path id="Shape" fill="#4285F4" d="M20.64 12.205q-.002-.957-.164-1.84H12v3.48h4.844a4.14 4.14 0 0 1-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615"></path>
                  <path id="Shape_2" fill="#34A853" d="M12 21c2.43 0 4.468-.806 5.957-2.18L15.05 16.56c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H3.958v2.332A9 9 0 0 0 12.001 21"></path>
                  <path id="Shape_3" fill="#FBBC05" d="M6.964 13.712a5.4 5.4 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71V7.96H3.957A9 9 0 0 0 3 12.002c0 1.452.348 2.827.957 4.042z"></path>
                  <path id="Shape_4" fill="#EA4335" d="M12 6.58c1.322 0 2.508.455 3.441 1.346l2.582-2.58C16.463 3.892 14.427 3 12 3a9 9 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71"></path>
                </g>
              </g>
            </svg>
            <div className="text mx-auto"><span>Sign up with Google</span></div>
          </button>

          <button className="flex items-center bg-slate-50 text-black w-[22rem] border border-gray-300 rounded-full shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-6 w-6 bt">
              <g id="facebook">
                <g id="facebook-vector">
                  <path fill="#1877F2" d="M22 12.002c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54v-2.891h2.54V9.799c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.989c4.78-.75 8.437-4.888 8.437-9.879"></path>
                  <path fill="#fff" d="m15.893 14.893.443-2.891h-2.773v-1.876c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.196-2.238-.196c-2.284 0-3.777 1.385-3.777 3.89v2.204h-2.54v2.89h2.54v6.989a10 10 0 0 0 3.124 0v-6.988z"></path>
                </g>
              </g>
            </svg>
            <div className="text mx-auto"><span>Sign up with Facebook</span></div>
          </button>

          <button className="flex items-center bg-slate-50 text-black w-[22rem] border border-gray-300 rounded-full shadow-md max-w-xs px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="h-6 w-6 bt">
              <g id="email-icon">
                <g id="Group 10123" stroke="#242424">
                  <rect id="Rectangle 1488" width="17" height="13" x="3.5" y="5.505" rx="1"></rect>
                  <path id="Vector 107" strokeLinecap="round" d="m3.5 8.005 8.5 6 8.5-6"></path>
                </g>
              </g>
            </svg>
            <div className="text mx-auto"><span onClick={handleSignUpWithEmail}>Sign up with email</span></div>
          </button>

        </div>
        <div className="signIn mt-2">
          <span className="">Already have an account?
            <button className="ml-2 text-green-800 font-semibold" onClick={handleSignInClick}>Sign in</button>
          </span>
        </div>
        <div className="termsConditions text-gray-600 mt-20 text-center  mx-auto text-xs">
          <p className='px-16'>Click “Sign up” to agree to BlogSphere's <span className='underline cursor-pointer'>Terms of Service</span> and acknowledge that BlogSphere's <span className='underline cursor-pointer'>Privacy Policy</span> applies to you.</p>
        </div>
      </div>
    </div>
  );
};

const SignInWithEmail = ({ isVisible, onClose, handleSignInClick }) => {
  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-white bg-opacity-50 flex justify-center z-20'>
      <div className='bg-white p-6 rounded-lg flex items-center flex-col w-[50vw] min-h-screen relative text-black '>
        <div className="closeForm absolute top-3 right-3">
          <svg onClick={() => onClose()} width="29" height="29" className="text-black cursor-pointer ie fq if hm"><path fillRule="evenodd" d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"></path></svg>
        </div>
        <h2 className='text-3xl font-serif mt-24'>Sign in with email</h2>
        <div className="flex flex-col w-3/5 items-center gap-2 p-10">
          <p className='text-center text-base font-sans leading-5'>Enter the email address associated with your account, and we’ll send a magic link to your inbox.</p>
        </div>
        <form className="signIn mt-14 w-[42%]">
          <div>
            <label for="small-input" className="block mb-2 text-sm font-medium text-black text-center">Your email</label>
            <input type="email" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-50  bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="button flex items-center justify-center mt-11"><button className='px-16 rounded-full py-2 bg-slate-950 text-white text-base'>Continue</button></div>
        </form>
        <div className="allSignInOptions mt-9 text-emerald-700 flex items-center cursor-pointer">
          <svg width="19" height="19" className=" text-emerald-700 cl io ip" viewBox="0 0 19 19"><path fill='currentColor' fillRule="evenodd" d="M11.47 13.969 6.986 9.484 11.47 5l.553.492L8.03 9.484l3.993 3.993z"></path></svg>
          <span onClick={handleSignInClick}>All sign in options</span>
        </div>
      </div>
    </div>
  );
}

const SignUpWithEmail = ({ isVisible, onClose, handleWriteClick }) => {
  if (!isVisible) return null
  return (
    <div className='fixed inset-0 bg-white bg-opacity-50 flex justify-center z-20'>
      <div className='bg-white p-6 rounded-lg flex items-center flex-col w-[50vw] min-h-screen relative text-black'>
        <div className="closeForm absolute top-3 right-3">
          <svg onClick={() => onClose()} width="29" height="29" className="text-blackcursor-pointer ie fq if hm"><path fillRule="evenodd" d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"></path></svg>
        </div>
        <h2 className='text-3xl font-serif mt-24'>Sign up with email</h2>
        <div className="flex flex-col w-3/5 items-center gap-2 p-10">
          <p className='text-center text-base font-sans leading-5'>Enter your email address to create an account.</p>
        </div>
        <form className="signIn mt-9 w-[42%]">
          <div>
            <label for="small-input" className="block mb-2 text-sm font-medium text-black text-center">Your email</label>
            <input type="email" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-50  bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="button flex items-center justify-center mt-11"><button className='px-16 rounded-full py-2 bg-slate-950 text-white text-base'>Continue</button></div>
        </form>
        <div className="allSignInOptions mt-9 text-emerald-700 flex items-center cursor-pointer">
          <svg width="19" height="19" className=" text-emerald-700 cl io ip" viewBox="0 0 19 19"><path fill='currentColor' fillRule="evenodd" d="M11.47 13.969 6.986 9.484 11.47 5l.553.492L8.03 9.484l3.993 3.993z"></path></svg>
          <span onClick={handleWriteClick}>All sign up options</span>
        </div>
        <div className="reCaptcha font-sans text-xs text-center w-3/5 mt-9 text-gray-600">
          <p className=' px-4'>This site is protected by reCAPTCHA Enterprise and the <br />
            <span className="underline cursor-pointer"> Google Privacy Policy</span> and <span className="underline cursor-pointer">Terms of Service</span> apply.</p>
        </div>
      </div>
    </div>
  );

}

const page = () => {

  const slides = [
    {
      image: 'https://media.istockphoto.com/id/2149585773/photo/a-happy-beautiful-businessman-looking-away-while-working-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=3c6T7LoeMr8isIEXzTHnly_Vm_3cI4PUY1B9q0DRP_s=',
      title: "Can Entrepreneurship Classes Unlock the Secrets to Building the Next Big Startup?",
      author: "Dr. Emily Carter",
      jobTitle: "Serial Entrepreneur and Startup Mentor",
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


  const [isWriteModalVisible, setWriteModalVisible] = useState(false);
  const [isSignInModalVisible, setSignInModalVisible] = useState(false);
  const [isSignInWithEmail, setSignInWithEmail] = useState(false)
  const [isSignUpWithEmail, setSignUpWithEmail] = useState(false)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length, currentSlideIndex]);

  const currentSlide = slides[currentSlideIndex];


  const handleWriteClick = () => {
    setWriteModalVisible(true);
    setSignInModalVisible(false);
    setSignInWithEmail(false)
    setSignUpWithEmail(false)
  }

  const handleSignInClick = () => {
    setSignInModalVisible(true);
    setWriteModalVisible(false);
    setSignInWithEmail(false)
    setSignUpWithEmail(false)
  }

  const handleSignInWithEmail = () => {
    setSignInWithEmail(true)
    setSignInModalVisible(false);
    setWriteModalVisible(false);
    setSignUpWithEmail(false)
  }

  const handleSignUpWithEmail = () => {
    setSignUpWithEmail(true)
    setSignInWithEmail(false)
    setSignInModalVisible(false);
    setWriteModalVisible(false);
  }

  const closeModal = () => {
    setWriteModalVisible(false);
    setSignInModalVisible(false)
    setSignInWithEmail(false)
    setSignUpWithEmail(false)
  }


  return (
    <>
      <div className='header border-b border-black sticky top-0 z-50 bg-white'>
        <nav className='flex justify-between h-[80px] border-b items-center px-7'>
          <h1 className='text-3xl'><Link href={"/"}>Blog Sphere</Link></h1>
          <ul className='flex gap-5'>
            <li><button className='px-5 py-2 border border-black rounded-full font-sans text-sm' onClick={handleSignInClick}>Sign in</button></li>
            <li><button className='px-5 py-2 bg-black rounded-full font-sans text-sm text-white' onClick={handleWriteClick}>Sign up</button></li>
          </ul>
        </nav>
      </div>

      <div className="Bannercontainer w-full h-[65%] border-b border-black">
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
                <button
                  className='px-12 rounded-full py-3 bg-gray-900 hover:bg-gray-950 text-white mt-14 shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out'
                >
                  Get Started
                </button>

                <button
                  className={`px-12 rounded-full py-3 ${currentSlide.color} text-white mt-14 shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out`}
                >
                  View plans
                </button>
              </div>
            </div>
          </div>
          <div className="rightContainer w-[35%] max-h-[65%]">
            <BannerSlideshow slides={slides} interval={3000} />
          </div>
        </div>
      </div>

      <div className="whymembership flex mb-32 border-b border-black gap-20 max-w-full h-[auto] mt-3">
        <div className="left my-16 ml-7">
          <h1 className='sticky top-36 tracking-tighter leading-[74px] text-[70px]'>Why membership?</h1>
        </div>
        <div className="right my-16 flex flex-col gap-[120px] mr-28">
          <div>
            <h1 className='tracking-[-0.004em] leading-[52px] text-[48px]'>Reward writers</h1>
            <p className='text-[20px] leading-7 text-[#242424] mt-5'>Your membership directly supports the writers, editors, curators, and teams who make Medium a vibrant, inclusive home for human stories. A portion of your membership is allocated to the writers of the stories you read and interact with.</p>
          </div>
          <div>
            <h1 className='tracking-[-0.004em] leading-[52px] text-[48px]'>Unlock every story</h1>
            <p className='text-[20px] leading-7 text-[#242424] mt-5'>Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions.</p>
          </div>
          <div>
            <h1 className='tracking-[-0.004em] leading-[52px] text-[48px]'>Enhance your reading experience</h1>
            <p className='text-[20px] leading-7 text-[#242424] mt-5'>Immerse yourself in audio stories, read offline wherever you go, and connect with the Medium community on Mastodon.</p>
          </div>
          <div>
            <h1 className='tracking-[-0.004em] leading-[52px] text-[48px]'>Elevate your writing</h1>
            <p className='text-[20px] leading-7 text-[#242424] mt-5'>Create and contribute to publications to collaborate with other writers, create a custom domain for your profile, and level up your writing with our simple but powerful publishing tools.</p>
          </div>
          <div>
            <h1 className='tracking-[-0.004em] leading-[52px] text-[48px]'>Support a mission that matters</h1>
            <p className='text-[20px] leading-7 text-[#242424] mt-5'>Members are creating a world where original, human-crafted stories thrive. As a member-supported platform, quality comes first, not ads or clickbait.</p>
          </div>
        </div>
      </div>

      <div className="whatmembersaresaying flex mb-32 border-b border-black gap-20 max-w-full h-[auto] mt-3">
        <div className="left my-16 ml-7">
          <h1 className='sticky top-36 tracking-tighter leading-[74px] text-[70px]'>What&nbsp;members are saying?</h1>
        </div>
        <div className="right my-16 flex flex-col gap-[120px] mr-28">
          <div className='flex gap-8'>
            <div className="image"><img src="https://miro.medium.com/v2/resize:fill:160:160/1*djKJlXxmezn6fBPzHnipnw.jpeg" alt="" width={220} height={220} className='rounded-full' /></div>
            <div className="sayings">
              <p className='text-[20px] tracking-[-0.003em] leading-8 text-[#242424]'>The easy path in social media is promoting the worst content, the cheapest, tackiest, lowest-effort stuff. That’s not what you get on Medium. You can actually find content you can build your brain with. I appreciate that, both as a reader and a writer.</p>
              <p className='title text-[16px] leading-6 mt-[1rem]'><span className="font-bold">Cassie Kozyrkov,</span> Chief Decision Scientist at Google and Medium member</p>
            </div>
          </div>

          <div className='flex gap-8'>
            <div className="image"><img src="https://miro.medium.com/v2/resize:fill:160:160/1*ZYP58jl-6KcKocr1P7r5Hw.jpeg" alt="" width={220} height={220} className='rounded-full' /></div>
            <div className="sayings">
              <p className='text-[20px] tracking-[-0.003em] leading-8 text-[#242424]'>Medium has proved a game-changer for me, and quickly became the subscription I value the most, and I have quite a few. The cost is nothing compared to the value Medium generates for me month after month.</p>
              <p className='title text-[16px] leading-6 mt-[1rem]'><span className="font-bold">Enrique Dans,</span> Professor of Innovation at IE Business School and Medium member</p>
            </div>
          </div>
          <div className='flex gap-8'>
            <div className="image"><img src="https://miro.medium.com/v2/resize:fill:160:160/1*Ce4jOl6gjeebSiHsknN2-A.jpeg" alt="" width={450} height={450} className='rounded-full' /></div>
            <div className="sayings">
              <p className='text-[20px] tracking-[-0.003em] leading-8 text-[#242424]'>For us tech folks, Medium membership unlocks a whole treasure trove of high-quality articles. One good technology book could sell for over the Medium membership fee amount. It’s your choice whether to buy one book, or buy hundreds and thousands of books by unlocking member-only reading on Medium. Investing in a Medium membership is one of the best investments I have ever made for my career.</p>
              <p className='title text-[16px] leading-6 mt-[1rem]'><span className="font-bold">Wenqui Glantz,</span> Software Architect at ArisGlobal and Medium member</p>
            </div>
          </div>
        </div>
      </div>

      <div className="membershipplans flex mb-10 border-b border-black gap-20 max-w-full h-[auto] mt-3">
        <div className="my-16 ml-7">
          <h1 className='sticky top-36 tracking-tighter leading-[74px] text-[70px]'>Membership plans</h1>
        </div>
        <div className="my-16 flex gap-10 mr-28 w-full">
          <div className="medium-member border border-gray-300 flex flex-col items-center w-1/2">
            <div className="svg mt-7">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64" role="presentation" aria-hidden="true" focusable="false" class="ki kj"><path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path></svg>
            </div>
            <div className="title">
              <h2 className='font-bold text-[24px] leading-7 tracking-[-0.016em]'>Medium Member</h2>
              <p className='font-serif'>$5/month or $60/year</p>
            </div>
            <div className="btn">
              <button className='text-[14px] leading-5 px-24 rounded-full py-2  bg-[#1A8917] hover:bg-[#156D12] text-white mt-5'>
                Get Started
              </button>
            </div>

            <div className="spacer h-[1px] bg-gray-300 w-64 my-7"></div>

            <div className="benefits leading-5 text-[14px] text-[#242424]">
              <ul className='flex flex-col items-start px-7 mb-7'>
                <li className='flex gap-2 mt-3'>
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg>
                  </div>
                  <div className="text">
                    <p>Read member-only stories</p>
                  </div>
                </li>
                <li className='flex gap-2 mt-3'>
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg>
                  </div>
                  <div className="text">
                    <p>Support writers you read most</p>
                  </div>
                </li>
                <li className='flex gap-2 mt-3'>
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg>
                  </div>
                  <div className="text">
                    <p>Earn money for your writing</p>
                  </div>
                </li>
                <li className='flex gap-2 mt-3'>
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg>
                  </div>
                  <div className="text">
                    <p>Listen to audio narrations</p>
                  </div>
                </li>
                <li className='flex gap-2 mt-3'>
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg>
                  </div>
                  <div className="text">
                    <p>Read offline with the Medium app</p>
                  </div>
                </li>
                <li className='flex gap-2 mt-3'>
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg>
                  </div>
                  <div className="text">
                    <p>Access our Mastodon community</p>
                  </div>
                </li>
                <li className='flex gap-2 mt-3'>
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg>
                  </div>
                  <div className="text">
                    <p>Connect your custom domain</p>
                  </div>
                </li>
                <li className='flex gap-2 mt-3'>
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg>
                  </div>
                  <div className="text">
                    <p>Create your own publications</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="medium-friend border border-gray-300 w-1/2 flex flex-col items-center">
            <div className="svg mt-7">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64" role="presentation" aria-hidden="true" focusable="false" class="ki kj"><path fill="#FFC017" fill-rule="evenodd" d="M56.475 38.3C58.125 36.575 60 34.6 60 32s-1.875-4.575-3.525-6.3c-.95-.975-1.975-2.05-2.3-2.875-.325-.824-.35-2.17-.375-3.494v-.006c-.025-2.425-.075-5.2-2-7.125s-4.7-1.975-7.125-2l-.431-.007c-1.172-.017-2.29-.034-3.069-.368-.875-.375-1.9-1.35-2.875-2.3C36.575 5.875 34.6 4 32 4s-4.575 1.875-6.3 3.525c-.975.95-2.05 1.975-2.875 2.3-.824.325-2.17.35-3.494.375h-.006c-2.425.025-5.2.075-7.125 2s-1.975 4.7-2 7.125l-.007.431c-.017 1.172-.034 2.29-.368 3.069-.375.875-1.35 1.9-2.3 2.875C5.875 27.425 4 29.4 4 32s1.875 4.575 3.525 6.3c.95.975 1.975 2.05 2.3 2.875.325.824.35 2.17.375 3.494v.006c.025 2.425.075 5.2 2 7.125s4.7 1.975 7.125 2l.431.007c1.172.017 2.29.034 3.069.368.875.375 1.9 1.35 2.875 2.3C27.425 58.125 29.4 60 32 60s4.575-1.875 6.3-3.525c.975-.95 2.05-1.975 2.875-2.3.824-.325 2.17-.35 3.494-.375h.006c2.425-.025 5.2-.075 7.125-2s1.975-4.7 2-7.125l.007-.431c.017-1.172.034-2.29.368-3.069.375-.875 1.35-1.9 2.3-2.875m-23.36 6.846a1.92 1.92 0 0 1-2.226 0h-.003C27.574 42.8 18.006 35.762 18 28.909s6.503-10.252 13.259-4.45c.43.37 1.052.37 1.482 0 6.755-5.805 13.265-2.403 13.259 4.45-.006 6.56-9.574 13.892-12.886 16.237" clip-rule="evenodd"></path></svg>
            </div>
            <div className="title">
              <h2 className='font-bold text-[24px] leading-7 tracking-[-0.016em]'>Friend of Medium</h2>
              <p className='font-serif'>$15/month or $150/year</p>
            </div>
            <div className="btn">
              <button className='text-[14px] leading-5 px-24 rounded-full py-2  bg-[#1A8917] hover:bg-[#156D12] text-white mt-5'>
                Get Started
              </button>
            </div>
            <div className="spacer h-[1px] bg-gray-300 w-64 my-7"></div>

            <div className="extras flex gap-2 leading-5 text-[14px] text-[#242424]">
              <div className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 64 64" role="presentation" aria-hidden="true" focusable="false" className="la kz"><path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path></svg>
              </div>
              <div className="text">
                <p>All Medium member benefits</p>
              </div>
            </div>

            <div className="PLUS flex gap-2 items-center">
              <div className="spacer h-[1px] bg-gray-300 w-24 my-7"></div>
              <span className='text-[14px] text-gray-400'>PLUS</span>
              <div className="spacer h-[1px] bg-gray-300 w-24 my-7"></div>

            </div>

            <div className="benefits leading-5 text-[14px] text-[#242424] flex flex-col items-start">
              <div className="heading flex items-center gap-2 px-7">
                <div className="svg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg>
                </div>
                <h2 className='font-bold text-[18px]'>
                  Give 4x more to the writers you read
                </h2>
              </div>
              <ul className='flex flex-col items-start mb-7 px-7 text-[14px]'>
                <li className='flex gap-2 mt-3'>
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg>
                  </div>
                  <div className="text">
                    <p>Share member-only stories with anyone and drive more earnings for writers</p>
                  </div>
                </li>
                <li className='flex gap-2 mt-3'>
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg>
                  </div>
                  <div className="text">
                    <p>Customize app icon</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="b-footer flex flex-col items-center py-[80px] px-[32px] bg-gradient-animation">
        <p className='tracking-tighter leading-[74px] text-[70px]'>Unlock a world of wisdom</p>
        <div className="btn">
          <button className='px-12 rounded-full py-3 bg-gray-900 hover:bg-gray-950 text-white mt-14'>
            Get Started
          </button>
        </div>
      </div>

      <div className='footer relative z-10 bg-[#F7F4ED] h-[75px] border-t border-black flex justify-between items-center text-black px-7'>
        <h2 className='font-semibold text-3xl font-serif'><Link href={"/"}>Blog Sphere</Link></h2>
        <ul className='text-gray-600 font-sans text-xs flex gap-3 justify-center items-center h-full cursor-pointer underline'>
          <li>About</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Help</li>
          <li>Teams</li>
          <li>Press</li>
        </ul>
      </div>

      <WriteModal isVisible={isWriteModalVisible} onClose={closeModal} handleSignInClick={handleSignInClick} handleSignUpWithEmail={handleSignUpWithEmail} />
      <SignInModal isVisible={isSignInModalVisible} onClose={closeModal} handleSignInWithEmail={handleSignInWithEmail} handleWriteClick={handleWriteClick} />
      <SignInWithEmail isVisible={isSignInWithEmail} onClose={closeModal} handleSignInClick={handleSignInClick} />
      <SignUpWithEmail isVisible={isSignUpWithEmail} onClose={closeModal} handleWriteClick={handleWriteClick} />


    </>
  )
}

export default page

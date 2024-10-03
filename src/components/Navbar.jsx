"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import RegisterationForm from './RegisterationForm';
import SigninForm from './SigninForm';

const SignInModal = ({ isVisible, onClose, handleSignInWithEmail, handleWriteClick }) => {
  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center z-20'>
      <div className='bg-white p-6 rounded-lg flex items-center flex-col w-[50vw] relative max-h-[100vh] overflow-auto scrollBar'>
        <div className="closeForm absolute top-3 right-3">
          <svg onClick={() => onClose()} width="29" height="29" className="cursor-pointer ie fq if hm"><path fillRule="evenodd" d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"></path></svg>
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
          <p className='px-16'>Click “Sign in” to agree to BlogSphere&apos;s <span className='underline cursor-pointer'>Terms of Service</span> and acknowledge that BlogSphere&apos;s <span className='underline cursor-pointer'>Privacy Policy</span> applies to you.</p>
        </div>
      </div>
    </div>
  );
};


const WriteModal = ({ isVisible, onClose, handleSignInClick, handleSignUpWithEmail }) => {
  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center z-20'>
      <div className='bg-white p-6 rounded-lg flex items-center flex-col w-[50vw] min-h-screen relative'>
        <div className="closeForm absolute top-3 right-3">
          <svg onClick={() => onClose()} width="29" height="29" className="cursor-pointer ie fq if hm"><path fillRule="evenodd" d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"></path></svg>
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
          <p className='px-16'>Click “Sign up” to agree to BlogSphere&apos;s <span className='underline cursor-pointer'>Terms of Service</span> and acknowledge that BlogSphere&apos;s <span className='underline cursor-pointer'>Privacy Policy</span> applies to you.</p>
        </div>
      </div>
    </div>
  );
};

const SignInWithEmail = ({ isVisible, onClose, handleSignInClick, handleWriteClick, closeModal }) => {
  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center z-20'>
      <div className='bg-white p-6 rounded-lg flex items-center flex-col w-[50vw] min-h-screen relative'>
        <div className="closeForm absolute top-3 right-3">
          <svg onClick={() => onClose()} width="29" height="29" className="cursor-pointer ie fq if hm"><path fillRule="evenodd" d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"></path></svg>
        </div>
        <SigninForm handleSignInClick={handleSignInClick} handleWriteClick={handleWriteClick} closeModal={closeModal}/>
      </div>
    </div>
  );
}

const SignUpWithEmail = ({ isVisible, onClose, handleWriteClick, handleSignInClick }) => {

  if (!isVisible) return null
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center z-20'>
      <div className='bg-white p-6 rounded-lg flex items-center flex-col w-[50vw] min-h-screen relative'>
        <div className="closeForm absolute top-3 right-3">
          <svg onClick={() => onClose()} width="29" height="29" className="cursor-pointer ie fq if hm"><path fillRule="evenodd" d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61"></path></svg>
        </div>
        <RegisterationForm handleSignInClick={handleSignInClick} handleWriteClick={handleWriteClick} />
      </div>
    </div>
  );

}


const Navbar = () => {
  const [isWriteModalVisible, setWriteModalVisible] = useState(false);
  const [isSignInModalVisible, setSignInModalVisible] = useState(false);
  const [isSignInWithEmail, setSignInWithEmail] = useState(false)
  const [isSignUpWithEmail, setSignUpWithEmail] = useState(false)


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
      <nav className='flex justify-between items-center w-[100vw] h-[75px] px-16 border-b-[1px] border-black z-10 relative bg-[#F7F4ED] ' style={{ fontFamily: 'CustomFont, sans-serif' }}>
        <Link href={"/"}>
          <span className='font-semibold font-serif text-3xl'>BlogSphere</span>
        </Link>
        <ul className='flex gap-5 items-center font-normal text-base font-sans'>
          <li><Link href={"/about"}>Our Story</Link></li>
          <li><Link href={"/membership"}>Membership</Link></li>
          <li onClick={handleWriteClick} className='cursor-pointer'>Write</li>
          <li className='cursor-pointer' onClick={handleSignInClick}>Sign in</li>
          <li><button className='px-5 rounded-full py-2 bg-gray-800 hover:bg-gray-950 text-white' onClick={handleWriteClick}>Get Started</button></li>
        </ul>
      </nav>

      <WriteModal isVisible={isWriteModalVisible} onClose={closeModal} handleSignInClick={handleSignInClick} handleSignUpWithEmail={handleSignUpWithEmail} />
      <SignInModal isVisible={isSignInModalVisible} onClose={closeModal} handleSignInWithEmail={handleSignInWithEmail} handleWriteClick={handleWriteClick} />
      <SignInWithEmail isVisible={isSignInWithEmail} onClose={closeModal} handleSignInClick={handleSignInClick} handleWriteClick={handleWriteClick} closeModal={closeModal}/>
      <SignUpWithEmail isVisible={isSignUpWithEmail} onClose={closeModal} handleWriteClick={handleWriteClick} handleSignInClick={handleSignInClick} />

    </>
  )
}

export default Navbar

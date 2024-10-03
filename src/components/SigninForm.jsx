'use client'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../state/index.js';
import { useRouter } from 'next/navigation';
import { setLoading } from '../../state';
import PlayLoading from '@/app/PlayLoading.jsx';

const SigninForm = ({ handleSignInClick, handleWriteClick, closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const handleLogin = async (e) => {
        e.preventDefault();

        const resultAction = dispatch(loginUser({ email, password }));
        dispatch(setLoading(true));

        if (loginUser.fulfilled.match(resultAction)) {

            setTimeout(() => {
                router.push('/');
                dispatch(setLoading(false));
            }, 10000);
            setEmail('');
            setPassword('');
            closeModal();
        } else {

            dispatch(setLoading(false));
            console.error(`Login error: ${resultAction.payload}`);
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
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-20">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <input
                        type="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Id"
                        className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>

                <div className="text-right mb-4">
                    <a href="#" className="text-sm text-purple-600 hover:underline">Forgot Password?</a>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full p-3 text-white rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600">
                    {loading ? "Loading" : "Login"}
                </button>
            </form>

            <div className="mt-4 text-center">
                <p className="text-sm">Don't have an account?
                    <a href="#" className="text-purple-600 hover:underline" onClick={handleWriteClick}> Sign Up</a>
                </p>
                <p className="text-sm">Need help?
                    <a href="#" className="text-purple-600 hover:underline"> Contact Us</a>
                </p>
            </div>

            <div className="allSignInOptions mt-9 text-emerald-700 flex items-center justify-center cursor-pointer">
                <svg width="19" height="19" className=" text-emerald-700 cl io ip" viewBox="0 0 19 19">
                    <path fill='currentColor' fillRule="evenodd" d="M11.47 13.969 6.986 9.484 11.47 5l.553.492L8.03 9.484l3.993 3.993z"></path>
                </svg>
                <span onClick={handleSignInClick}>All sign in options</span>
            </div>
        </div>
    );
}

export default SigninForm;

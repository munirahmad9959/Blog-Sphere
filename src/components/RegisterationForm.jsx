'use client'
import React, { useState } from 'react';
import { auth, db } from '../../lib/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { setDoc, doc, addDoc, collection, Firestore } from 'firebase/firestore';

const RegisterationForm = ({ handleSignInClick, handleWriteClick }) => {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await createUserWithEmailAndPassword(formData.email, formData.password);
            console.log({ res });

            try {
                const usersCollectionRef = collection(db, "users");
                await setDoc(doc(usersCollectionRef, res.user.uid), {
                    id: res.user.uid,
                    fullName: formData.fullName,
                    username: formData.username,
                    email: formData.email,
                    phoneNumber: formData.phoneNumber,
                });
                console.log(`Document created successfully`);
                setLoading(false);
            } catch (error) {
                console.log(`Error from RegistrationForm during document creation: ${error}`);
            }

            // Clear form after successful registration
            setFormData({
                fullName: '',
                username: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
                gender: '',
            });
            setLoading(false);
            handleSignInClick();

        } catch (error) {
            console.error(`Error from RegistrationForm: ${error}`);
        }
    };

    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6 mt-7">Registration</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleRegister}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input required
                        type="text"
                        name="fullName"
                        placeholder="Enter Your Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input required
                        type="text"
                        name="username"
                        placeholder="Enter Your Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input required
                        type="email"
                        name="email"
                        placeholder="Enter Your E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input required
                        type="tel"
                        name="phoneNumber"
                        placeholder="Enter Your Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input required
                        type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input required
                        type="password"
                        name="confirmPassword"
                        placeholder="Enter Your Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <div className="mt-2 flex space-x-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                            />
                            <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                            />
                            <span className="ml-2">Female</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Prefer Not to Say"
                                checked={formData.gender === 'Prefer Not to Say'}
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                            />
                            <span className="ml-2">Prefer Not to Say</span>
                        </label>
                    </div>
                </div>
                <div className="col-span-2">
                    <button disabled={loading}
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        {loading ? "Loading" : "Register"}
                    </button>
                </div>
            </form>
            <div className="allSignInOptions mt-9 text-emerald-700 flex items-center cursor-pointer">
                <svg width="19" height="19" className=" text-emerald-700 cl io ip" viewBox="0 0 19 19"><path fill='currentColor' fillRule="evenodd" d="M11.47 13.969 6.986 9.484 11.47 5l.553.492L8.03 9.484l3.993 3.993z"></path></svg>
                <span onClick={handleWriteClick}>All sign up options</span>
            </div>

        </>
    );
};

export default RegisterationForm;

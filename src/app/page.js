'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../lib/firebase';
import { useSelector } from 'react-redux';
import PlayLoading from './PlayLoading';
import UserPage from '@/components/UserPage';

export default function Home() {
  const [user, firebaseLoading] = useAuthState(auth);
  const reduxLoading = useSelector((state) => state.auth.loading);


  const loading = firebaseLoading || reduxLoading;

  if (loading) {
    return (
      <PlayLoading />
    );
  }

  return (
    <>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      {user ? (
        <div className="h-screen overflow-x-hidden">
          <UserPage />
        </div>
      ) : (
        <div className="h-screen overflow-x-hidden">
          <Navbar />
          <Banner />
          <Footer />
        </div>
      )}
    </>
  );
}

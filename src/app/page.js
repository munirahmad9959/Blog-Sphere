'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";
import UserNavbar from "@/components/UserNavbar";
import Image from "next/image";


export default function Home() {
  const [user, loading] = useAuthState(auth);
  console.log({ user })

  if (loading) {
    return (

      <div className="h-screen flex items-center justify-center">
        <Image
          src="/spinner.gif"
          alt="Loading..."
          width={100}
          height={100}
          unoptimized={true}
        />
      </div>
    );
  }
  return (
    <>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      {user ? (
        <div className="h-screen overflow-x-hidden">
          <UserNavbar email={user.email} />
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

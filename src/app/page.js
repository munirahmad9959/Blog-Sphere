import React from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="h-screen overflow-x-hidden">
        <Navbar />
        <Banner />
        <Footer />
      </div>
    </>
  );
}

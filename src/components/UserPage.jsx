'use client'
import React from 'react'
import UserNavbar from './UserNavbar'
import CategoriesBullets from './CategoriesBullets'

const UserPage = () => {
  return (
    <>
      <UserNavbar />
      {/* <CategoriesBullets /> */}
      <div className="flex h-screen w-screen mt-10 gap-14 mx-20">
        <div className="left w-[50vw] h-full">
          <CategoriesBullets />
        </div>
        <div className="right border border-red-700 w-[30vw] h-full">hello2</div>
      </div>

    </>
  )
}

export default UserPage

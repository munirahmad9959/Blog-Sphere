import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className='header '>
                <nav className='flex justify-between h-[80px] border-b items-center px-7'>
                    <h1 className='text-3xl'><Link href={"/"}>Blog Sphere</Link></h1>
                    <ul className='flex gap-5'>
                        <li><button className='px-5 py-2 border border-white rounded-full font-sans text-sm'>Sign in</button></li>
                        <li><button className='px-5 py-2 border border-black rounded-full font-sans text-sm bg-white text-black'>Sign up</button></li>
                    </ul>
                </nav>
            </div>
            <div className="main ml-[32px] w-1/2 leading-[88px] tracking-tighter font-[400]">
                <h2 className='mt-[100px] mb-[100px] text-[85px]' >Everyone has a story to tell.</h2>
                <p className='text-[21px] leading-[32px] tracking-[-0.003em]'>Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.</p>

                <p className='mt-7 text-[21px] leading-[32px] tracking-[-0.003em]'>
                    We believe that what you read and write matters. Words can divide or empower us, inspire ordiscourage us. In a world where the most sensational and surface-level stories often win, we’rebuilding a system that rewards depth, nuance, and time well spent. A space for thoughtfulconversation more than drive-by takes, and substance over packaging.
                </p>

                <blockquote className='mt-10 bg-[#242424] p-1'>
                    <p className='bg-[rgba(255,255,255,0.2)] font-[300] text-[27px] leading-[32px] tracking-[-0.003em] mb-2 w-[max-content]'>
                        Ultimately, our goal is to deepen our collective
                    </p>
                    <p className='bg-[rgba(255,255,255,0.2)] font-[300] text-[27px] leading-[32px] tracking-[-0.003em] mb-2 w-[max-content]'>
                        understanding of the world through the power of
                    </p>
                    <p className='bg-[rgba(255,255,255,0.2)] font-[300] text-[27px] leading-[32px] tracking-[-0.003em] w-[max-content]'>
                        writing.
                    </p>
                </blockquote>

                <p className='mt-10 text-[21px] leading-[32px] tracking-[-0.003em]'>Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.</p>

                <p className='mt-7 text-[21px] leading-[32px] tracking-[-0.003em]'>
                    Instead of selling ads or selling your data, we’re supported by a growing community of <span className="underline cursor-pointer">Blog Sphere members</span> who align with our mission. If you’re new here, <span className="underline cursor-pointer">start exploring</span>. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then <span className="underline cursor-pointer">share your own story</span>.
                </p>



                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />

            </div>
        </>
    )
}

export default page

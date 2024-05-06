"use client";
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/moving-border';

export default function Section() {
  return (
    <>
    <div className="min-h-[60vh] flex flex-col-reverse gap-16 lg:gap-0 lg:flex-row items-center justify-between">  
        <div className="space-y-10 text-center lg:text-left">
            <h1 className=" text-5xl font-bold">
                Nice to meet you!
                <br/>
                <div className='flex'>
                <span className="underline underline-offset-8 decoration-purple-500 ">
                {"I'm"} <span className="text-green-500">{ "Shefali"}</span>
                </span>
                <p id='hithere' >🖐</p></div>
            </h1>
            <p className='md: w-96 text-sm text-gray-3'>{" I am a "}<span className=" font-bold text-green-500">{" Full-Stack Web developer "}</span> {"in the process of crafting something captivating and unique🌟🔨 . My current focus revolves around skill-building and continuous learning. I’m particularly interested in Technologies, Development, and Machine Learning. Additionally, I"} <span className='text-yellow-300'>{"write Technical Blogs📝"}</span>{"  and have interest in Digital Marketing"}<span className='text-blue-300 text-xl'> (◕⩊◕)</span></p>

            <Link href={"mailto:desaishefali507@gmail.com"} className='inline-block '>
                <div>
                    <h1 className='text-2xl font-bold hover: scale-80 '>Contact Me📬 </h1><div className="w-40 h-1 bg-yellow-500 rounded-full "></div>
                    <div className="w-40 h-1 bg-indigo-500 rounded-full translate-x-2"></div>
                </div>
            </Link>   
        </div>

    <div className='relative'>  
           
            <img src="/side-unscreen.gif"  alt="" />
            
                
            <div className='absolute bottom-5 sm:bottom-5 left:0 sm:left-0'>
                <Button borderRadius="0.5rem" className="p-2 font-semibold ">🎒 Collab for Work</Button>
            </div>
        </div>
        </div>
       
    </>   
  )
}

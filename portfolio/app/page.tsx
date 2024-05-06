"use client";

import React from "react"; 
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Skills from "./components/Skills";
import Project from "./components/Project";
import { SignupFormDemo } from "./components/Form";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <>
   
   <motion.div
   
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 100 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
>
    
    <FollowerPointerCard title={<TitleComponent title={blogContent.author} avatar={blogContent.authorAvatar}/>}>
        <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative overflow-hidden  ">

          <div className="min-h-[400vh] bg-black overflow-hidden">      
            <div className="max-w-7x1 mx-auto p-5 ">
                <Navbar  />   
                <Section />   
            </div> 

            <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 x1:bottom-0 w-full"></div>
              <div className="max-w-7x1 mx-auto  p-5 mt-20">
                <Skills/>
                <Project/>  
              </div>

              <div className="h-20 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 x1:bottom-0 w-full"></div>

              <div className="max-w-7x1 mx-auto  p-5 mt-20">
                <SignupFormDemo/>
              </div>
             
          </div>
        </div>
      </FollowerPointerCard>
    </motion.div>
    
  </>
  );
}


  const blogContent = {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Shefali",
    date: "16th April, 2024",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description: "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image: "/demo/thumbnail.png",
    authorAvatar: "/Shefali.jpg",
  };
 
  const TitleComponent = ({title,avatar,}: {title: string; avatar: string;}) => (
      <div className="flex space-x-2 items-center">
        <Image
          src={avatar}
          height="30"
          width="30"
          alt="thumbnail"
          className="rounded-full border-2 border-white"
        />
        <p>{title}</p>
      </div>
  );
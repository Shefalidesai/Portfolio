"use client";
import React from 'react'
import { SiAngular, SiAntdesign, SiApifox, SiDjango, SiGraphql, SiJupyter, SiMongodb, SiNextdotjs, SiNodedotjs, SiPycharm, SiPython, SiReactquery, SiSpring, SiSupabase, SiTailwindcss } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { SiThealgorithms} from "react-icons/si";
import { FaReact } from "react-icons/fa6";

export default function Project() {
    const projects = [
        {
            Link: "https://www.youtube.com/watch?v=4iNiYJMUqO4",
            title: "Home Rental App",
            tech: [ SiAngular, SiAntdesign, SiSpring, SiThealgorithms],
            cover: '/home.jpeg',
            background: "bg-purple-500",
        },
        {
            Link: "https://huffman-compressor.netlify.app/",
            title: "Compressor App",
            tech: [ SiReactquery, SiAntdesign, SiTailwindcss, SiThealgorithms],
            cover: '/compressor.png',
            background: "bg-purple-500",
        },
        
        {
            Link: "http://localhost:3000",
            title: "Google Calender",
            tech: [ SiReactquery, SiNodedotjs, SiMongodb, SiTailwindcss,SiGraphql],
            cover: '/calender.png',
            background: "bg-cyan-500",
        },
        {
            Link: "https://www.jetir.org/view?paper=JETIR2204420",
            title: "Credit Card Fraud Detection App",
            tech: [SiPython, SiDjango, SiJupyter, SiPycharm],
            cover: '/credit.png',
            background: "bg-blue-500",
        },
        {
            Link: "https://github.com/Shefalidesai/Chat-App",
            title: "Chat App",
            tech: [ SiReactquery, SiTailwindcss,SiGraphql],
            cover: '/chat.png',
            background: "bg-cyan-500",
        },
        {
            Link: "https://getupdates.netlify.app/",
            title: "News Application",
            tech: [SiAngular, SiApifox, SiAntdesign],
            cover: '/Angular.jpeg',
            background: "bg-yellow-500",
        },
        {
            Link: "https://shefaliportfolio.vercel.app/",
            title: "Portfolio App",
            tech: [SiNextdotjs, FaReact, SiTailwindcss],
            cover: '/portfolio.png',
            background: "bg-green-500",
        },
      
       
        ];
  return (
    <div>
         <div className="py-10 p-5 sm:p-0">
            <Title text="Projects 🖥️" className="flex flex-col items-center justify-center -rotate-6"/>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
            {projects.map((project, index) => {
            return (
            <Link href={project.Link} key={index}>
            <div className={cn("p-3 rounded-md", project.background)}>     
        <DirectionAwareHover imageUrl={project.cover} className="w-90 space-y-5 cursor-pointer">
                <p>{project.title}</p> 
            < div className='space-y-5'>   
            <div className="flex items-center gap-5">
                    {project.tech.map((Icon,index)=>{
                        return(
                          <Icon className='w-8 h-8' key={index}/>
                        )
                    })}
                     </div></div>     
        </DirectionAwareHover>
    </div>
    </Link>
    )})}
</div>
    </div>
  )
}

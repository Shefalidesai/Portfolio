
'use client'
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { SiAngular, SiFigma, SiGit, 
  SiGitlab, 
  SiGrafana, 
  SiJavascript,
  SiJira,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiSqlite, 
  SiTailwindcss,
  SiTypescript, } from 'react-icons/si';
  import { FaJava } from "react-icons/fa6";


export default function Skills() {
  const skills = [
    {
      title:"Javascript",
      Icon:SiJavascript,
    },
    {
      title:"TypeScript",
      Icon:SiTypescript,
    },
    {
      title:"Angular",
      Icon: SiAngular,
    },
    {
      title:"React",
      Icon:SiReact,
    },
   
    {
      title:"NodeJs",
      Icon:SiNodedotjs
    },
    {
      title:"Java",
      Icon:FaJava
    },
    {
      title:"SQL",
      Icon: SiSqlite
    },
    {
      title:"MongoDB",
      Icon:SiMongodb
    },
    {
      title: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      title: "Tailwind",
      Icon:SiTailwindcss,
    },
   

   
   
  ]
 
  const tools=[
    {
      title:"GitLab",
      Icon: SiGitlab,
    },
    {
      title:"Jira",
      Icon:SiJira
    },
    {
      title:"Figma",
      Icon:SiFigma,
    },
    {
      title:"PostMan",
      Icon:SiPostman,
    },
    {
      title:"GrafnaFaro",
      Icon:SiGrafana
    }
  ]

  return (
    <>

    <div className='max-w-5xl mx-auto px-8'>
    
      <Title text='Skills🎯' className='flex flex-col items-center justify-center -rotate-6'/>
      
      <HoverEffect items={skills}></HoverEffect>
      
      
    </div>
    <div className='max-w-5xl mx-auto px-8'>
    <Title text='Tools⚔️' className='flex flex-col items-center justify-center -rotate-6'/>
    <HoverEffect items={tools}  />
  
  </div>
  
  </>
  )
}

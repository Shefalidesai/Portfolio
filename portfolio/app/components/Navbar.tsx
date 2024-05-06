import React from 'react'
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { LiaBlogSolid } from "react-icons/lia";
import Link from 'next/link';

export default function Navbar() {
    const socials = [
        {
            Link: "https://github.com/Shefalidesai",
            Label: "GitHub",
            Icon: SiGithub,
        },
        { 
            Link: "https://www.linkedin.com/in/shefali-s16/",
            Label: "Linkedin",
            Icon: FaLinkedinIn,
        },
        { 
            Link: "https://medium.com/@Shefa.li",
            Label: "Medium",
            Icon:FaMedium
        },
        { 
            Link: "https://auth.geeksforgeeks.org/user/desaishefali50/articles",
            Label: "Blogs",
            Icon:LiaBlogSolid
        }

        ]

return (  
        <nav className=" py-10 flex justify-between items-center">
         <h1 className="text-2x1 font-bold -rotate-3 transition-all duration-500">Shefali Desai 👩🏻‍💻</h1>
            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const Icon=social.Icon;
                    return(
                    <Link
                        href={social.Link}
                        key={index}
                        aria-label={social.Label}>
                        <Icon className="w-7 h-7 hover: scale-80 transition-all transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... " />
                    </Link>
                    );
                })}
            </div>
        </nav>
    )
}

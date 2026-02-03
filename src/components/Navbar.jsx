import React, {useEffect, useState} from 'react'
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
       const handleScroll = () => {
           const isScrolled = window.scrollY > 10;
           setScrolled(isScrolled);
       }
       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);
    },[])

    return (
       <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
         <div className="inner">
           <a className="logo" href="#hero">
               Lakshay | LJ
           </a>

           <nav className="desktop">
             <ul>
                 {navLinks.map(({link,name})=>(
                   <li key={name} className="group">
                     <a href={link}>
                       <span>{name}</span>
                       <span className="underline"/>
                     </a>
                   </li>
                 ))}
             </ul>
           </nav>
           <a href="https://drive.google.com/file/d/1J2LA2Lq9p5EXoxXUvCyri6sqHAqPTBHH/view?usp=sharing"
              className="contact-btn group flex flex-col" target="_blank">
               <div className="inner">
                   <span>My Resume</span>
               </div>
           </a>
           <a href="#contact" className="contact-btn group">
             <div className="inner">
               <span>Contact me</span>
             </div>
           </a>
         </div>
       </header>
    )
}
export default Navbar

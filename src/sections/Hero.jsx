import React from 'react'
import { words } from '../constants/index.js'
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP} from '@gsap/react';
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import assetPath from "../utils/assetPath";
const Hero = () => {
    useGSAP(()=>{
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.4,
                duration: 1,
                ease: 'power2.inOut'
            },
            )
    })
    return (
        <section id="hero" className="rel ative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src={assetPath('images/bg.png')} alt="background" />
            </div>

            <div className="hero-layout">
                {/*Left: Hero Content*/}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Software Developer</h1>
                            <h1>
                                Ehthusiast,
                                <span className="slide">
                                  <span className="wrapper">
                                      {words.map((word,index)=>(
                                          <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img
                                            src={word.imgPath}
                                            alt={word.text}
                                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                                              <span>{word.text}</span>
                                          </span>
                                      ))}
                                  </span>
                                </span>

                            </h1>
                            <h1>with Tech.</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I'm Lakshay, a B.Tech graduate based in Delhi ,India <br/>
                            with a passion for code and games.<br/>
                            During my college years, I completed PowerApps training with <br/>
                            Celebal and, in my final year, secured an internship at Philips, Bangalore.<br/>
                            I have expertise in building applications using PowerApps<br/>
                            and am proficient with data analytics tools like PowerBi and Tableau.
                        </p>

                        {/*<div id="work" className="flex flex-col gap-5" >*/}
                        {/*    <Button className="md:w-80 md:h-15 w-60 h-12"*/}
                        {/*            text="See my Work"*/}
                        {/*            id="work"*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*<Button className="md:w-80 md:h-15 w-60 h-12"*/}
                        {/*  id="work"*/}
                        {/*  href="#work"*/}
                        {/*  text="See my Work"*/}
                        {/*/>*/}
                    </div>
                </header>
                {/*Right: Hero 3D image*/}
                <figure>
                   <div className="hero-3d-layout ">
                    <HeroExperience />
                   </div>
                </figure>
            </div>
            {/*<AnimatedCounter />*/}
        </section>
    )
}
export default Hero

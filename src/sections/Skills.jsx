import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {skills} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";

const Skills = () => {
    return (
        <section id="skills" className="flex-center section-padding">
         <div className="w-full h-full md:px-10 px-5">
           <TitleHeader title="Skills that I am working on"
                sub="🖥️ Currently working on"
           />

           <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
               {skills.map(({imgPath,name,review}) => (
                   <GlowCard card={{review}}>
                     <div className="flex items-center gap-3">
                        <div>
                          <img src={imgPath} alt={name} />
                        </div>
                        <div>
                          <p className="font-bold">{name}</p>
                          {/*<p className="text-white-50">{mentions}</p>*/}
                        </div>
                     </div>
                   </GlowCard>
               ))}
           </div>

         </div>
        </section>
    )
}
export default Skills

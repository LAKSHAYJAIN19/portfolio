import React, {useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP} from "@gsap/react";
import assetPath from '../utils/assetPath'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);



    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card,index) => {
            gsap.fromTo(
                card,
                {
                    y:50,opacity:0
                },
                {
                    y:0,opacity:1,delay:0.1*(index+1),
                    scrollTrigger:{
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })


      gsap.fromTo(sectionRef.current,
          {opacity:0},
          {opacity:1,duration:1.5}
      )
    },[]);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
               <div className="showcaselayout">
                   {/*Left*/}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src={assetPath('images/project1.png')} alt="Ryde"/>
                        </div>
                        <div className="text-content">
                            <h2>New Algorithm for Market Basket Analysis</h2>
                            <p className="text-white-50 md:text-xl">
                                Developed a novel algorithm for Market Basket Analysis that significantly
                                reduced the time complexity of
                                existing methods, enhancing the efficiency and accuracy of identifying product associations
                                and patterns in transactional data.
                            </p>
                        </div>
                    </div>
                   {/*Right*/}
                   <div className="project-list-wrapper overflow-hidden">
                     <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffefdb]">
                           <img src={assetPath('images/project2.png')} alt="Library Management"/>
                        </div>
                         <h2>Movie Recommendation System</h2>
                         <p className="text-white-50 md:text-xl">
                             Created a movie recommendation system using machine learning algorithms
                             to provide personalized suggestions based on user-input keywords
                             such as movie genre, actor name, director name and other preferences.
                         </p>
                     </div>
                       <div className="project" ref={project3Ref}>
                           <div className="image-wrapper bg-[#ffe7eb]">
                               <img src={assetPath('images/project3.png')} alt="YC Directory"/>
                           </div>
                           <h2>Personal Playlist Player</h2>
                           <p className="text-white-50 md:text-xl">
                               Created a Spotify playlist player using HTML, CSS, JavaScript,
                               and Bootstrap, enabling me to access and listen
                               to some of my favorite playlists from Spotify.
                           </p>
                       </div>
                   </div>
               </div>
            </div>
        </section>
    )
}
export default ShowcaseSection

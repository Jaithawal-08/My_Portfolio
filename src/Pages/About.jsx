import React from 'react'
import Video from "../Components/Home/Video";
import Hero from '../Components/About/Hero';
import HeroBottom from '../Components/About/HeroBottom';
const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-20">
         <Video />
      </div>
      <Hero />
      <HeroBottom />
    </div>
  )
}

export default About
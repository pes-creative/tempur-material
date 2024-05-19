'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import AnimatedHeader from './animated-header'

const HeroSection = () => {

  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.play();
  }, []);


  return (
    <div className='bg-gradient-to-b from-[#000] to to-[#111] '>
      <section className='section relative flex items-center justify-center sfpro-medium bg-gradient-to-b from-[#222] to to-[#000]'>
        <div className='container-wrapper h-full flex items-center justify-center'>
          <div className='flex flex-col justify-center'>
            {/* <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
            >
              <h2 className='section-header'> tempur material</h2>
            </motion.div> */}
            <AnimatedHeader>
              tempur material
            </AnimatedHeader>
          </div>
        </div>
      </section>
      <motion.section className='section xl:h-[1000px] flex items-center bg-earth relative'>
        <motion.div className='h-full flex items-center justify-center absolute top-0 bottom-0 right-0 w-full z-[10]'
          initial={{ background: 'rgba(0,0,0,0.8)' }}
          whileInView={{ background: 'rgba(0,0,0,0)' }}
          transition={{ duration: .9, delay: 0.3 }}
          viewport={{ amount: 0.6 }}
        >
          <AnimatedHeader>
            born from space <br /> and perfected for <br /> sleep
          </AnimatedHeader>
        </motion.div>
      </motion.section >


      <section className='flex flex-col gap-20 sm:gap-24 md:gap-28 lg:gap-32 xl:gap-36 pt-[30vh]'>
        <motion.h2 className="section-header !leading-[60%]"
          initial={{ opacity: [0, 0, 0, 0, 0], y: 150 }}
          whileInView={{ opacity: [0, 0.1, 0.3, 0.5, 1], y: 0 }}
          transition={{ duration: .6 }}
        >
          <span className="normal-case">
            But what's the  difference <br />
            <span className='text-[50%] leading-[0px]'>Better pressure reliefe & motion absorbtion</span>
          </span>
        </motion.h2>

        <div id="start" className="w-full xl:h-[100vh] bg-gray-950 text-white flex items-center justify-center text-center">
          <div className="w-full z-0 relative h-full">
            <video
              ref={videoRef}
              autoplay
              loop
              muted
              className="object-cover w-full h-full aspect-[4/3] sm:aspect-video"
            >
              <source src="./video.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div >
      </section >


    </div >
  )
}

export default HeroSection
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo , smallHeroVideo } from '../utlis';
import { useState } from 'react';
import { useEffect } from 'react';


const Hero = () => {
    const [videoSrc, setVideoSrc ] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo )

    const handleVideoSrcSet= () => {
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }
        else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);

        return() => {
            window.removeEventListener('resize' , handleVideoSrcSet)
        } 
})
    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 2})
        gsap.to('#cta', {opacity: 1, y: -50, delay: 2 })
    },[])

  return (
    <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <p id="hero" className="hero-title">iPhone 15 Pro</p>
          <div className="md:w-10/12 w-full px-5 sm:px-0 sm:w-9/12">
            <video className="pointer-events-none w-full" autoPlay muted playsInline={true} key={videoSrc}>
                <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 px-5">
          <button 
            onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })} 
            className="btn"
          >
            Buy
          </button>
          <p className="font-normal text-sm sm:text-base md:text-xl text-center">
            From ₹119900.00* or ₹4912.00/mo. for 24 mo.‡
          </p>
        </div>
    </section>
  )
}

export default Hero

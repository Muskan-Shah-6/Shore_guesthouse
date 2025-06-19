import React, { useEffect } from 'react'
import HomeImage from '../assets/images/Home/Home_bg.png'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MarqueeGallery from '../components/marque/MarqueeGallery'
import AnimatedButton from '../components/Button/AnimatedButton'

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    })
    const navigate = useNavigate()
    return (
        <>
            {/* First page */}
            <section>
                <div className="px-0 sm:px-[15px] lg:px-25">
                    <div className="relative w-full h-screen overflow-hidden">
                        {/* Background Image */}
                        <img
                            src={HomeImage}
                            alt="Home background"
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay only over the image */}
                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                        {/* Optional Text on Image */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                            <h1 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" className="text-white text-2xl sm:text-4xl text-center ">Where Comfort and Charm Meet the Aegean</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* Second page marquee section */}
            <section className="py-10">
                <div className='px-2 sm:px-[15px] lg:px-35 space-y-5'   data-aos="fade-right">
                    <p className='text-sm font-normal  text-start text-black'>Gallery</p>
                    <h1 className='text-black text-start  text-3xl '>Experience Shore Guesthouse.</h1>
                    <AnimatedButton onClick={() => navigate('/gallery')} >View full gallery</AnimatedButton>
                </div>
                <div className='px-0 sm:px-[15px] lg:px-25 space-y-5  overflow-hidden ' >
                    <MarqueeGallery />
                </div>
            </section>
        </>
    )
}
export default Home
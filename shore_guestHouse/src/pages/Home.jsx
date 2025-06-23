import React, { useEffect } from 'react'
import HomeImage from '../assets/images/Home/Home_bg.png'
import HomeFooter from '../assets/images/Home/footer_bg.png'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MarqueeGallery from '../components/marque/MarqueeGallery'
import AnimatedButton from '../components/Button/AnimatedButton'
import ImageBanner from '../components/Banner/ImageBanner'
import Footer from '../components/navigation/Footer'

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
            <ImageBanner imageScr={HomeImage} heading={'Where Comfort and Charm Meet the Aegean'} position='center' />

            {/* Second page marquee section */}
            <section className="py-10">
                <div className='px-2 sm:px-[15px] lg:px-35 space-y-5' data-aos="fade-right">
                    <p className='text-sm font-normal  text-start text-black'>Gallery</p>
                    <h1 className='text-black text-start  text-3xl '>Experience Shore Guesthouse.</h1>
                    <AnimatedButton onClick={() => navigate('/gallery')} >View full gallery</AnimatedButton>
                </div>
                <div className='px-0 sm:px-[15px] lg:px-25 space-y-5  overflow-hidden ' >
                    <MarqueeGallery />
                </div>
            </section>

            {/* About section */}
            <section className='py-15' >
                <div className='bg-white shadow-md max-w-7xl mx-auto  px-2 sm:px-[15px] lg:px-10 py-15'>
                    <div data-aos="fade-up" className='space-y-5'>
                        <p className='text-start text-sm text-black'>About us</p>
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl max-w-[700px] w-full leading-relaxed">
                            Tucked into the rugged cliffs of Santorini, the Shore Guesthouse offers a retreat with uninterrupted views of the caldera.
                        </h1>

                        <hr className="h-1 max-w-[700px] w-full bg-gradient-to-r from-amber-800 via-amber-500 to-amber-800 border-0 rounded" />


                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl max-w-[700px] w-full leading-relaxed">
                            To learn the history behind Shore Guesthouse and the beauty of Santorini.
                        </h1>
                        <AnimatedButton onClick={() => navigate('/info')}>Read our story</AnimatedButton>
                    </div>
                </div>
            </section>
            <section className=''>
                <ImageBanner height='400px' imageScr={HomeFooter} title={'Plan Your Dream Getaway:'} heading={'Summer 2025 Dates Available'} btn="Book now" position='top_left' />
            </section>

            {/* Footer section */}
            <section className='mt-1'>
                <Footer />
            </section>
        </>
    )
}
export default Home
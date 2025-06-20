import React, { useEffect } from 'react'
import GalleryHome from '../assets/images/Gallery/first_page.png'
import ImageBanner from '../components/Banner/ImageBanner'
import viewImage1 from '../assets/images/Gallery/welcome_pg_1.png'
import viewImage2 from '../assets/images/Gallery/welcome_pg_2.png'
import viewImage3 from '../assets/images/Gallery/welcome_pg_3.png'
import viewImage4 from '../assets/images/Gallery/welcome_pg_4.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/navigation/Footer'

const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    })

    return (
        <>
            {/* first page section */}
            <section className='w-full'>
                <div className='p-10'>
                    <h1 className='text-7xl font-normal text-black text-start'>Gallery</h1>
                </div>
            </section>
            <section className='overflow-hidden'>
                <ImageBanner imageScr={GalleryHome} heading={'Explore our gallery and start planning.'} position='center' />
            </section>


            <section className='py-30 overflow-hidden'>
                <div className='text-center space-y-3'>
                    <p className='text-md text-black'>Exterior Views</p>
                    <h1 className='text-xl lg:text-5xl sm:text-2xl text-black'>Welcome to Shore Guesthouse</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 px-4 sm:px-10 md:px-20">
                    <div className="text-start" data-aos="fade-up">
                        <img
                            src={viewImage1}
                            alt="first_img"
                            className="w-[75%] md:w-[75%] mx-auto md:mx-0 transition-transform duration-300 hover:scale-105 shadow"
                        />
                        <p className="text-black mt-3">A haven lies behind the blue door</p>
                    </div>

                    <div className="text-start" data-aos="fade-up">
                        <img
                            src={viewImage2}
                            alt="second_img"
                            className="w-[55%] md:w-[55%] mx-auto md:mx-0 transition-transform duration-300 hover:scale-105 shadow"
                        />
                        <p className="text-black mt-3">A lodge Room</p>
                    </div>

                    <div className="text-start -mt-96 md:mt-0" data-aos="fade-up">
                        <img
                            src={viewImage4}
                            alt="third_img"
                            className="w-[55%] md:w-[55%] mx-auto md:mx-0 transition-transform duration-300 hover:scale-105 shadow"
                        />
                        <p className="text-black mt-3">The outer Deck</p>
                    </div>

                    <div className="text-start" data-aos="fade-up">
                        <img
                            src={viewImage3}
                            alt="fourth_img"
                            className="w-[75%] md:w-[75%] mx-auto md:mx-0 transition-transform duration-300 hover:scale-105 shadow"
                        />
                        <p className="text-black mt-3">The outer Deck</p>
                    </div>
                </div>

            </section>

            {/* Footer section */}
            <section className='mt-1'>
                <Footer />
            </section>
        </>
    )
}

export default Gallery

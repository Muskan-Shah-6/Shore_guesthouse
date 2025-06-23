import React, { useEffect, useState } from 'react'
import GalleryHome from '../assets/images/Gallery/first_page.png'
import ImageBanner from '../components/Banner/ImageBanner'
import viewImage1 from '../assets/images/Gallery/welcome_pg_1.png'
import viewImage2 from '../assets/images/Gallery/welcome_pg_2.png'
import viewImage3 from '../assets/images/Gallery/welcome_pg_3.png'
import viewImage4 from '../assets/images/Gallery/welcome_pg_4.png'
import galleryCaoursel1 from '../assets/images/Gallery/gallery_caousel_1.png'
import galleryCarousel2 from '../assets/images/Gallery/gallery_carousel_2.png'
import galleryCarousel3 from '../assets/images/Gallery/gallery_carousel_3.png'
import galleryCarousel4 from '../assets/images/Gallery/gallery_carousel_4.png'
import galleryCarousel5 from '../assets/images/Gallery/gallery_carousel_5.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/navigation/Footer'

const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])

    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        galleryCaoursel1,
        galleryCarousel2,
        galleryCarousel3,
        galleryCarousel4,
        galleryCarousel5
    ];

    // Autoplay with useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // change every 4 seconds

        return () => clearInterval(interval); // cleanup
    });


    return (
        <>
            {/* first page section */}
            <section className='w-full '>
                <div className='p-10'>
                    <h1 className='text-7xl font-normal text-black text-start'>Gallery</h1>
                </div>
            </section>
            <section className='overflow-hidden'>
                <ImageBanner imageScr={GalleryHome} heading={'Explore our gallery and start planning.'} position='center' />
            </section>

            <section className='py-30 overflow-hidden max-w-7xl mx-auto'>
                <div className='text-center space-y-3'>
                    <p className='text-md text-black'>Exterior Views</p>
                    <h1 className='text-xl lg:text-5xl sm:text-2xl text-black'>Welcome to Shore Guesthouse</h1>
                </div>
                <div className="columns-1 md:columns-2 gap-6 mt-20 px-4 sm:px-10 md:px-20">
                    <div className="break-inside-avoid mb-6 p-15 bg-amber-50 shadow-md" data-aos="fade-up">
                        <img
                            src={viewImage1}
                            alt="first_img"
                            className="w-full transition-transform duration-300 hover:scale-105 shadow rounded-md"

                        />
                        <p className="text-black mt-3 text-center">A haven lies behind the blue door</p>
                    </div>

                    <div className="break-inside-avoid mb-6" data-aos="fade-up">
                        <img
                            src={viewImage2}
                            alt="second_img"
                            className="w-full transition-transform duration-300 hover:shadow-xl hover:scale-105 shadow rounded-md"
                        />
                        <p className="text-black mt-3 text-center">A lodge Room</p>
                    </div>

                    <div className="break-inside-avoid mb-6" data-aos="fade-up">
                        <img
                            src={viewImage4}
                            alt="third_img"
                            className="w-full transition-transform duration-300 hover:shadow-xl hover:scale-105 shadow rounded-md"
                        />
                        <p className="text-black mt-3 text-center">The outer Deck</p>
                    </div>

                    <div className="break-inside-avoid mb-6 bg-amber-50 shadow-md p-15" data-aos="fade-up">
                        <img
                            src={viewImage3}
                            alt="fourth_img"
                            className="w-full transition-transform duration-300 hover:scale-105 shadow rounded-md"
                        />
                        <p className="text-black mt-3 text-center">The outer Deck</p>
                    </div>
                </div>

            </section>

            {/* carousel */}
            <section className='max-w-7xl mx-auto px-4'>
                <div className='bg-[#2f3344] text-white rounded-md px-4 py-16 ' >
                    <div className='text-center space-y-2 mb-10'>
                        <p className='text-sm'>Interior View</p>
                        <h1 className='text-4xl font-bold'>Uncover guesthouse's charm and character.</h1>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Main Image */}
                        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`carousel_${index}`}
                                    className={`
                                        absolute top-0 left-0 w-full h-full object-cover
                                        transition-opacity duration-1000 ease-in-out
                                        ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                                    `}
                                />
                            ))}
                        </div>


                        {/* Thumbnails */}
                        <div className="flex justify-center flex-wrap gap-3 mt-6">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`thumb_${index}`}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-24 h-16 object-cover  ease-in-out rounded-md cursor-pointer border-4  hover:scale-105 transition duration-300 transform hover:-translate-y-1 border-white hover:border-amber-900 hover:rotate-2 ${activeIndex === index ? 'border-amber-900 ' : 'border-transparent'}`}
                                />
                            ))}
                        </div>
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

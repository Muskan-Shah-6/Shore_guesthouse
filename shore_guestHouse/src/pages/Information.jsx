import React, { useEffect } from 'react'
import ImageBanner from '../components/Banner/ImageBanner'
import firstPgImage from '../assets/images/Info/info_home.png'
import storyOne from '../assets/images/Info/story_img_1.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Information = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        })
    }, [])
    return (
        <>
            <section className='w-full'>
                <div className='p-10  h-96 flex items-center '>
                    <h1 className='text-7xl font-normal text-black text-start'>Information</h1>
                </div>
                <div className='-mt-25'>
                    <ImageBanner imageScr={firstPgImage} heading={'This house, and this village, have been a part of our lives for generations.'} position='center' />
                </div>
            </section>
            {/* story section */}
            <section className='py-30 overflow-hidden max-w-7xl mx-auto'>
                <div className='flex justify-around flex-wrap'>
                    <div className='p-5' data-aos="fade-right">
                        <h1 className='text-black font-bold text-2xl'>My Story</h1>
                    </div>
                    <div className='p-5'>
                        <p data-aos="fade-up" className='w-[450px] text-start text-xl font-normal'> Shore Guesthouse is a dream come true, a labor of love inspired by the childhood summers I spent here with my grandparents. Their stories of Oia, the warmth of the island life, and the magic of this place have always stayed with me. Restoring this home has been a way to honor their memory and share the spirit of Oia with others.</p>
                        <img data-aos="fade-up" src={storyOne} alt="story_1_img" className='h-[500px] w-[500px] mt-10' />
                    </div>
                </div>
                <hr />
            </section>
        </>
    )
}

export default Information

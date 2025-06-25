import React, { useEffect } from 'react'
import ImageBanner from '../components/Banner/ImageBanner'
import firstPgImage from '../assets/images/Info/info_home.png'
import storyOne from '../assets/images/Info/story_img_1.png'
import storyTwo from '../assets/images/Info/info_home.png'
import infoFooterUp from '../assets/images/Info/info_before_footer.png'
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
                    <h1 className='text-2xl sm:text-3xl md:text-7xl font-normal text-black text-start'>Information</h1>
                </div>
                <div className='-mt-25'>
                    <ImageBanner imageScr={firstPgImage} heading={<>This house, and this village, have been a part of <br></br> our lives for generations.</>} position='center' />
                </div>
            </section>
            {/* story section */}
            <section className="py-20 px-6 sm:px-10 md:px-20 max-w-7xl mx-auto overflow-hidden">
                {/* First story */}
                <div className="flex flex-col md:flex-row md:justify-between items-start gap-10">

                    <div className="w-full md:w-1/3" data-aos="fade-right">
                        <h1 className="text-black font-bold text-5xl sm:text-3xl md:text-3xl">My Story</h1>
                    </div>
                    <div className="w-full md:w-2/3 space-y-10">
                        <p data-aos="fade-up" className="text-lg sm:text-xl font-normal text-start font-serif">
                            Shore Guesthouse is a dream come true, a labor of love inspired by the childhood summers I spent here with my grandparents.
                            Their stories of Oia, the warmth of the island life, and the magic of this place have always stayed with me.
                            Restoring this home has been a way to honor their memory and share the spirit of Oia with others.
                        </p>
                        <img data-aos="fade-up"
                            src={storyOne}
                            alt="story_1_img"
                            className="w-full max-w-[500px] h-auto rounded-md shadow-md"
                        />
                    </div>
                </div>
                <hr className="mt-16 border-amber-800 max-w-7xl mx-auto" />
                <div className="flex flex-col md:flex-row md:justify-between pt-25 items-start gap-10">

                    <div className="w-full md:w-1/3" data-aos="fade-right">
                        <h1 className="text-black font-bold text-5xl sm:text-3xl md:text-3xl">History of the Neighbourhood</h1>
                    </div>
                    <div className="w-full md:w-2/3 space-y-10">

                        <img data-aos="fade-up"
                            src={storyTwo}
                            alt="story_1_img"
                            className="w-full max-w-[500px] h-auto rounded-md shadow-md p-20 bg-[#e5cbad]"
                        />
                        <p data-aos="fade-up" className="text-lg sm:text-xl font-normal text-start font-serif">
                            Oia is a living, breathing village. Wander the streets and you'll find hidden courtyards and locals chatting over coffee.
                            Skip the fancy restaurants and enjoy today’s catch at a family-run taverna.
                            Catch the sunset for a moment of peace. And, if you can, strike up a conversation with a local –
                            they’ll tell you stories of Oia that no guidebook can.
                        </p>
                    </div>
                </div> 
                <div className='py-20  max-w-7xl mx-auto overflow-hidden'>
                    <img src={infoFooterUp} alt="" />
                </div>
            </section>

        </>
    )
}

export default Information

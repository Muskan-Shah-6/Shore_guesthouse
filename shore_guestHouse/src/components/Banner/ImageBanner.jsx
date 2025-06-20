import React from 'react'
import AnimatedButton from '../Button/AnimatedButton'

const ImageBanner = ({ imageScr, title, heading, btn, position = 'center', overlayOpacity = 0.5, textClassname = '', classname = '', height = 'h-screen' }) => {
    // Set the position class for banner
    const positionClasses = {
        center: 'items-center justify-center text-center',
        top_left: 'items-start justify-start text-left p-8 sm:p-10'
    }
    return (
        <>
            <section className={`w-full ${classname} ${height}`}>
                <div className="px-0 sm:px-[15px] lg:px-25">
                    <div className={`relative w-full overflow-hidden`}>
                        {/* Background Image */}
                        <img src={imageScr} alt="Banner background" className="w-full h-full object-cover" />
                        {/* Overlay */}
                        <div className='absolute  inset-0 bg-black z-10' style={{ opacity: overlayOpacity }} ></div>
                        {/* Banner content */}
                        <div className={`absolute  inset-0 z-20  flex flex-col space-y-4 ${positionClasses[position]}`} >
                            <p data-aos='fade-zoom-in' data-aos-easing='ease-in-back' data-aos-delay='300' data-aos-offset='0'  className={`text-white text-sm  ${textClassname}`}>{title}</p>
                            <h1 data-aos='fade-zoom-in' data-aos-easing='ease-in-back' data-aos-delay='300' data-aos-offset='0' className={`text-white text-2xl sm:text-4xl ${textClassname}`}>
                                {heading}
                            </h1>
                            {btn && <AnimatedButton>{btn}</AnimatedButton>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImageBanner

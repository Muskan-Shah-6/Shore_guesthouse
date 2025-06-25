import React from 'react';
import AnimatedButton from '../Button/AnimatedButton';

const ImageBanner = ({
  imageScr,
  title,
  heading,
  btn,
  position = 'center',
  overlayOpacity = 0.5,
  textClassname = '',
  classname = '',
  imgHeigth = ''
}) => {
  const positionClasses = {
    center: 'items-center justify-center text-center',
    top_left: 'items-start justify-start text-left px-4 sm:px-8 pt-6 sm:pt-10'
  };

  return (
    <section className={`w-full ${classname}`}> 
      <div className="max-w-7xl mx-auto relative  overflow-hidden">
        {/* Background image container with fixed min-height */}
        <div className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[450px]">
          {/* Image */}
          <img
            src={imageScr}
            alt="Banner background"
            className={`absolute inset-0 w-full h-full object-cover ${imgHeigth}`}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black z-10"
            style={{ opacity: overlayOpacity }}
          ></div>
          {/* Content */}
          <div
            className={`absolute inset-0 z-20 flex flex-col space-y-4 ${positionClasses[position]}`}
          >
            <p
              className={`text-white text-sm sm:text-base ${textClassname}`}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              {title}

            </p>
            <h1
              className={`text-white text-2xl sm:text-4xl font-semibold leading-snug ${textClassname}`}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              {heading}
              
            </h1>
            {btn && <AnimatedButton>{btn}</AnimatedButton>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;

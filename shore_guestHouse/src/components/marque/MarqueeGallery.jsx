import React from 'react';
import Marquee from 'react-fast-marquee';

// Images
import marq1 from '../../assets/images/Home/carousel_img_1.png';
import marq2 from '../../assets/images/Home/carousel_img_2.png';
import marq3 from '../../assets/images/Home/carousel_img_3.png';
import marq4 from '../../assets/images/Home/carousel_img_4.png';
import marq5 from '../../assets/images/Home/carousel_img_5.png';

const imageData = [
  { src: marq1, caption: 'A haven lies behind the blue door.', offsetY: '-translate-y-4', height: 'h-40 sm:h-44 md:h-48', rotate: 'rotate-5' },
  { src: marq2, caption: 'Explore the open sea.', offsetY: 'translate-y-2', height: 'h-36 sm:h-40 md:h-44', rotate: '-rotate-3' },
  { src: marq3, caption: 'Unwind in our lounge room', offsetY: '-translate-y-1', height: 'h-44 sm:h-48 md:h-52', rotate: 'rotate-2' },
  { src: marq4, caption: 'Enjoy a drink by the pool', offsetY: 'translate-y-0', height: 'h-52 sm:h-56 md:h-60', rotate: '-rotate-2' },
  { src: marq5, caption: 'Sink into the plush comfort of the canopy bed.', offsetY: '-translate-y-3', height: 'h-36 sm:h-40 md:h-44', rotate: 'rotate-3' },
];

const MarqueeGallery = () => {
  return (
    <div className="py-10 px-4 sm:px-10">
      <Marquee speed={40} gradient={false} className="overflow-y-hidden">
        {imageData.map((item, index) => (
          <div
            key={index}
            className={`mx-3 sm:mx-6 flex flex-col items-center ${item.offsetY}`}
          >
            <div className={`rounded-xl overflow-hidden shadow-md ${item.height} ${item.rotate} hover:shadow-amber-900 transition-all duration-300 cursor-pointer`}>
              <img
                src={item.src}
                alt={`img-${index}`}
                className="object-cover h-full w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[250px] transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-center text-xs sm:text-sm text-gray-700 mt-2 w-[180px] sm:w-[200px]">
              {item.caption}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeGallery;

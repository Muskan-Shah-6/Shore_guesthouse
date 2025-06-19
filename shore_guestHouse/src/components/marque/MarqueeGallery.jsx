import React from 'react';
import Marquee from 'react-fast-marquee';

// Sample Images
import marq1 from '../../assets/images/Home/carousel_img_1.png';
import marq2 from '../../assets/images/Home/carousel_img_2.png';
import marq3 from '../../assets/images/Home/carousel_img_3.png';
import marq4 from '../../assets/images/Home/carousel_img_4.png';
import marq5 from '../../assets/images/Home/carousel_img_5.png';

// Image data with random heights and Y-offsets
const imageData = [
  { src: marq1, caption: 'A haven lies behind the blue door.', offsetY: '-translate-y-4',  height: 'h-[200px]', rotate: 'rotate-5'  },
  { src: marq2, caption: 'Explore the open sea.', offsetY: 'translate-y-2', height: 'h-[160px]', rotate: '-rotate-3'  },
  { src: marq3, caption: 'Unwind in our lounge room', offsetY: '-translate-y-1', height: 'h-[180px]', rotate: 'rotate-2'  },
  { src: marq4, caption: 'Enjoy a drink by the pool', offsetY: 'translate-y-0', height: 'h-[220px]', rotate: '-rotate-2'  },
  { src: marq5, caption: 'Sink into the plush comfort of the canopy bed.', offsetY: '-translate-y-3', height: 'h-[150px]', rotate: 'rotate-3'  }, 
];

const MarqueeGallery = () => {
  return (
    <div className="py-10">
      <Marquee speed={40} gradient={false} className="gap-10 sm:gap-2 overflow-y-hidden">
        {imageData.map((item, index) => (
          <div
            key={index}
            className={`mx-5 flex flex-col items-center ${item.offsetY}`}
          >
            <div className={`rounded-lg overflow-hidden shadow-md ${item.height} ${item.rotate} hover:shadow-lime-200 cursor-pointer`}>
              <img
                src={item.src}
                alt={`img-${index}`}
                className="object-cover w-auto h-full transition-transform duration-300 hover:scale-120 " />
            </div>
            <p className="text-center text-sm text-gray-700 mt-2  w-[200px]">
              {item.caption}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeGallery;

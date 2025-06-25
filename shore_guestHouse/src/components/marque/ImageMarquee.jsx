import React from 'react'

const ImageMarquee = ({ images = [], speed = '30s', height = 'h-60' }) => {
    const animationStyle = {
        animationDuration: speed
    }

    return (
        <div className={`relative overflow-hidden w-full ${height}`}>
            {/* Scrolling wrapper with double images for seamless loop */}
            <div
                className="flex animate-marquee w-max"
                style={animationStyle}
            >
                {/* Duplicate image set for seamless loop */}
                {[...images, ...images].map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`marquee-${idx}`}
                        className="h-full w-[300px] object-cover mx-2 rounded-lg shadow-md"
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageMarquee

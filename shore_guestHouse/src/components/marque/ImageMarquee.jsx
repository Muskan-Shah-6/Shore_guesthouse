import React from 'react'

const ImageMarquee = ({ images = [], speed = '20s', height = 'h-32' }) => {
    const style = {
        animationDuration: speed
    }
    return (
        <>
            <div className={`overflow-hidden whitespace-nowrap w-full ${height}`}>
                <div className="inline-block animate-marquee" style={style}>
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`marquee-img-${index}`}
                            className="inline-block mx-4 h-full object-contain"
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ImageMarquee

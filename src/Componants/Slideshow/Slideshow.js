import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slideshow.css';


const Slideshow = ({ images }) => {
    console.log(images)
    return (
        <div>
            <Slide easing="ease">
                {
                    images.map(img => <div className="each-slide"
                        key={img}>
                        <div style={{ 'backgroundImage': `url(${img})` }}>

                        </div>
                    </div>)
                }

            </Slide>
        </div>
    )
};

export default Slideshow;
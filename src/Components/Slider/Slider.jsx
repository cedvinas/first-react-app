import React, { useState, useEffect } from "react";
import SliderButton from "./SliderButton";
import SliderStatus from "./SliderStatus";

export default function Slider(props) {

    let [index, setIndex] = useState(0);
    let [images, setImages] = useState([
        'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752',
        'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg',
        'https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image_print',
        'https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg'
    ]);


    if (index > 3) {
        index = 0;
    } else if (index < 0) {
        index = images.length - 1;
    }

    return (
        <div className='slider-wrapper'>
            <div className="slider-content">
                <button className="prev" onClick={() => setIndex(index = index - 1)}><SliderButton direction='left' /></button>
                <img src={images[index]} className='img' />
                <button className="next" onClick={() => setIndex(index = index + 1)}><SliderButton direction='right' /></button>
            </div>
            <div className="slider-status-wrapper">
                <SliderStatus data={images} />
            </div>
        </div >

    );


}



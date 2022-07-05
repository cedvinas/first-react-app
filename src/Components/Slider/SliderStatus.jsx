import React from "react";
// import images from "./Slider";

function Bubble(props) {
    return (
        <div>
            <div className="slider-bubble"></div>
        </div>
    )
}


export default function SliderStatus(props) {
    let bubbles = '';
    //<div className="slider-bubble"></div>
    for (let i = 0; i < props.data.length; i++) {
        console.log('bubble');
        let bubble = document.createElement('div');
        let parent = document.createElement('div');
        bubble.className = 'slider-bubble';
        parent.appendChild(bubble);
    }


    return (
        <div id="slider-status">
            <Bubble />
        </div>
    )
}
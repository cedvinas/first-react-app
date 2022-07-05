import React from "react";

export default function SliderButton(props) {

    let btnClass;

    if (props.direction === 'left') {
        btnClass = 'fa-solid fa-chevron-left'
    } else {
        btnClass = 'fa-solid fa-chevron-right'
    }

    return <i className={btnClass}></i>
}
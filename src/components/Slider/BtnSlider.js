import React from 'react'
import './Slider.css'
import leftArrow from './icon/left-arrow.png'
import rightArrow from './icon/right-arrow.jpg'

export default function BtnSlider({direction, moveSlide}) {
    
  return (
    <botton
    onClick = {moveSlide}
    className={direction === "next" ? 'btn-slide next' : 'btn-slide prev'}>
        <img src={direction === "next" ? rightArrow: leftArrow}/>
    </botton>
  );
}

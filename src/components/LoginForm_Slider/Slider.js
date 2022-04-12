import React,{useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Slider() {

  const[sildeIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
      if (sildeIndex !== dataSlider.length){
        setSlideIndex(sildeIndex + 1);
      }
      else if (sildeIndex === dataSlider.length){
        setSlideIndex(1);
      }
  }
  const prevSlide = () => {
    if(sildeIndex !== 1){
      setSlideIndex(sildeIndex - 1);
    }
    else if(sildeIndex === 1){
      setSlideIndex(dataSlider.length);
    }
  }
  const moveDot = index => {
    setSlideIndex(index);
  }
  return (
    <div className='container-slider'>
      {dataSlider.map((obj, index) =>{
        return(
          <div
          key={obj.id} 
          className={sildeIndex === index + 1 ? "slide active-anim" : "slide"}>
            <img
              src = {process.env.PUBLIC_URL + `/imgs/img${index + 1}.jpg`}
            />
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction = {"next"}/>
      <BtnSlider moveSlide={prevSlide} direction = {"prev"}/>

      <div className='container-dots'>
        {Array.from({length: 5}).map((item, index) => (
          <div
          onClick={() => moveDot(index + 1)}
          className={sildeIndex === index + 1 ? "dot active" : "dot"}/>
        ))}
      </div>
    </div>
  )
}
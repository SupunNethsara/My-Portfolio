import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import "./Servicess.css"

export const Services = () => {

  useEffect(() => {
    ScrollReveal().reveal('.cards', {
      origin: 'bottom',
      distance: '40px',
      duration: 1000,
      reset: true,
      easing: 'ease-in-out'
    });

  }, []);


  return (
    <>
      <div className="serv-main">
        <div className='serv-boxes'>
          <div className="headings"></div>
          <h2 className='heading-title'>My Services</h2>
        
          <div className="cards" >
            <div className="box">
              <i class="ri-edit-box-line"></i>
              <h2>Brinding</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              <i class="click ri-arrow-right-up-line"></i>
            </div>
            <div className="box">
              <i class="ri-computer-line"></i>
              <h2>Web-Site</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              <i class="click ri-arrow-right-up-line"></i>
            </div>
            <div className="box">
              <i class="ri-code-s-slash-line"></i>
              <h2>Web-App</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              <i class="click ri-arrow-right-up-line"></i>
            </div>
            <div className="box">
            <i class="ri-leaf-fill"></i>
              <h2>Logo Design</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              <i class=" click ri-arrow-right-up-line"></i>
            </div>
            <div className="box">
            <i class="ri-file-edit-line"></i>
              <h2>Editing</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              <i class=" click ri-arrow-right-up-line"></i>
            </div>
            <div className="box">
            <i class="ri-quill-pen-line"></i>
              <h2>Ui/UX</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              <i class=" click ri-arrow-right-up-line"></i>
            </div>
          </div>
        </div>
     
        <div className='down-right-bulb animate-pulse duration-75 '>
          <img src="/bulb.png" alt="Decorative" />
        </div>
        <div className='top-right-side-img animate-pulse '>
          <img src="/top-left-img.png" alt="Decorative" />
        </div>
        <div className='left-bottom-down-img animate-pulse duration-75'>
          <img src="/circles2.png" alt="Decorative" />
        </div>
      </div>
    </>
  )
}

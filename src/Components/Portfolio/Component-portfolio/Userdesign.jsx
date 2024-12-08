import React ,{useState,useEffect} from 'react'
import ScrollReveal from 'scrollreveal';
function Userdesign() {
  useEffect(() => {
    ScrollReveal().reveal('.row', {
      origin: 'bottom',
      distance: '40px',
      duration: 1000,
      reset: true,
      easing: 'ease-in-out'
    });
   
  }, []);
  return (
    <div className='all text-center items-center justify-center'>
    <div className="row">
      <div className='card-all'>
        <img src="/uiux1.png" alt="" srcset="" />
        <div className="card-content">
          <h3>E-learning Authentication UI</h3>
          <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
          <a href='#'><i class=" ri-external-link-fill"></i></a>
        </div>
      </div>
      <div className='card-all'>
        <img src="/uiux2.png" alt="" srcset="" />
        <div className="card-content">
          <h3>E-learning UI</h3>
          <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
          <a href='#'> <i class="ri-external-link-fill"></i></a>
        </div>
      </div>
      <div className='card-all'>
        <img src="/uiux3.png" alt="" srcset="" />
        <div className="card-content">
          <h3>Portfolio Ui</h3>
          <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
          <a href='#'><i class="ri-external-link-fill"></i></a>
        </div>
      </div>

     
    </div>
  </div>
  )
}

export default Userdesign
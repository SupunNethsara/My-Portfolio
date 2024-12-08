import React ,{useState,useEffect} from 'react'
import ScrollReveal from 'scrollreveal';
function Webdesign() {
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
          <img src="/Travel-guide.png" alt="" srcset="" />
          <div className="card-content">
            <h3>Traveling Guide</h3>
            <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
            <a href='#'><i class=" ri-external-link-fill"></i></a>
          </div>
        </div>
        <div className='card-all'>
          <img src="/E-learning.png" alt="" srcset="" />
          <div className="card-content">
            <h3>E-learning UI</h3>
            <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
            <a href='#'> <i class="ri-external-link-fill"></i></a>
          </div>
        </div>
        <div className='card-all'>
          <img src="/Flightbooking.png" alt="" srcset="" />
          <div className="card-content">
            <h3>Skywings Service</h3>
            <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
            <a href='#'><i class="ri-external-link-fill"></i></a>
          </div>
        </div>

        <div className='card-all'>

          <img src="/E-lerninghost.png" alt="" srcset="" />
          <div className="card-content">
            <h3>Hosting Service Front-end</h3>
            <p>This project is a Hosting Service front-end website designed using Bootstrap. It includes a responsive layout, modern UI components, and features such as service plans, pricing tables, and contact forms to enhance user engagement.</p>
            <a href='#'><i class="ri-external-link-fill"></i></a>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Webdesign
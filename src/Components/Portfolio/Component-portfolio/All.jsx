import React ,{useState,useEffect} from 'react'
import './all.css'
import ScrollReveal from 'scrollreveal';
function All() {

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
            <img src="lms.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Student Management (LMS)</h3>
              <p>React and laravel Project.using React in the laravel project.Incremental Devloment.not finish .</p>
              <a href='https://github.com/SupunNethsara/LMS-Student-leraning-and-managment-'><i class=" ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="Photographer-portfolio.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Photographer Porfolio</h3>
              <p>Using React and Firebase for this project.This was made at the request of a person.</p>
              <a href='https://shashimal-liyanage.netlify.app/'> <i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="b&wPortfolio.png" alt="" srcset="" />
            <div className="card-content">
              <h3>B&w Theme Portfolio</h3>
              <p>Using React  for this project.This was made at the request of a person.have responsive layout.</p>
              <a href='https://github.com/SupunNethsara/Portfolio-Black-White-Theme'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="e-com.png" alt="" srcset="" />
            <div className="card-content">
              <h3>E-commerce Front-end</h3>
              <p>This project is an E-commerce front-end website developed using AngularJS and TypeScript. It features a dynamic design with modern UI components, product catalogs, and responsive layouts, providing an interactive user experience.</p>
              <a href='https://github.com/SupunNethsara/Online-Shoping-Center'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="E-learning.png" alt="" srcset="" />
            <div className="card-content">
              <h3>E-learning Front-end</h3>
              <p>This project is an E-commerce front-end website built using HTML, CSS, and JavaScript. It features a modern design and includes essential components for an online learning, such as corces displays, navigation, and responsive layouts.</p>
              <a href='https://github.com/SupunNethsara/E-learning-Platform-Front-end-'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="E-lerninghost.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Hosting Service Front-end</h3>
              <p>This project is a Hosting Service front-end website designed using Bootstrap. It includes a responsive layout, modern UI components, and features such as service plans, pricing tables, and contact forms to enhance user engagement.</p>
              <a href='https://github.com/SupunNethsara/Hosting-Service-Bootstrap-Front-end-'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default All
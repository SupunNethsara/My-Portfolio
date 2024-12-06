import React ,{useState,useEffect} from 'react'
import './all.css';
import ScrollReveal from 'scrollreveal';
function Webapp() {
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
            <img src="/lms.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Student Management (LMS)</h3>
              <p>React and laravel Project.using React in the laravel project.Incremental Devloment.not finish .</p>
              <a href='https://drive.google.com/drive/folders/1XpSfZhrSDexk2wbLwI6B31tTLwTZhYhR?usp=drive_link'><i class=" ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="/Photographer-portfolio.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Photographer Porfolio</h3>
              <p>Using React and Firebase for this project.This was made at the request of a person.</p>
              <a href='https://drive.google.com/drive/folders/1uuL4eZTj0Z8SdLCFh3_s9k_W8C9jpTFS?usp=drive_link'> <i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          <div className='card-all'>
            <img src="/b&wPortfolio.png" alt="" srcset="" />
            <div className="card-content">
              <h3>B&w Theme Portfolio</h3>
              <p>Using React  for this project.This was made at the request of a person.have responsive layout.</p>
              <a href='https://drive.google.com/file/d/1Xu9qHBYC7hC3PSQV4eyp1sCGG2osLo5H/view?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
          
          <div className='card-all'>
            <img src="/student-e-fornt.png" alt="" srcset="" />
            <div className="card-content">
              <h3>Sudent Management system Front-end</h3>
              <p>Would you like to know more About this ? .You Can get more information about this by clicking here .Get in touch</p>
              <a href='https://drive.google.com/drive/folders/11WQd2t82QFSRAyba2SVIiUSL-MzgKdJa?usp=drive_link'><i class="ri-external-link-fill"></i></a>
            </div>
          </div>
         
        </div>
    </div>
    
  )
}

export default Webapp
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './FirebaseConfig';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Feedback.css';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'; // Import Autoplay

function Testimonal() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const feedbackCollection = collection(db, 'feedbacks');
        const feedbackSnapshot = await getDocs(feedbackCollection);
        const feedbackList = feedbackSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestimonials(feedbackList);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map(testimonial => (
          <SwiperSlide key={testimonial.id}>
            <div className="card">
              {testimonial.profilePic && (
                <img src='profile.jpg' alt="User" className="rounded mt-2" />
              )}
              <div className="card__content">
                <span><i className="ri-double-quotes-l"></i></span>
                <div className="card__details">
                  <p>{testimonial.comment}</p>
                  <h4>- {testimonial.name}</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
  );
}

export default Testimonal;


import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Testimonal() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          'https://my-portfolio-c00bd-default-rtdb.firebaseio.com/feedbacks.json'
        );
        const feedbackList = response.data ? Object.entries(response.data).map(([key, value]) => ({
          id: key,
          ...value,
          date: new Date(value.timestamp).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })
        })) : [];
    
        feedbackList.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        setTestimonials(feedbackList);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load testimonials');
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-400">
        {error}
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-10">
        <div className="max-w-md mx-auto p-8 bg-gray-800/50 rounded-xl border border-dashed border-gray-600">
          <svg className="w-12 h-12 mx-auto text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-300 mb-2">No feedback yet</h3>
          <p className="text-gray-400 mb-6">Your feedback could appear here!</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-5 px-4 sm:px-4 lg:px-4 ">
      <div className="max-w-7xl mx-auto">
       
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="relative"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="h-full p-6 bg-gray-800/40 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-700/50 hover:border-red-500/30 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="text-red-400 text-4xl mb-2 float-left">"</div>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {testimonial.comment}
                    </p>
                      <div className="text-red-400 text-4xl mb-2 float-right">"</div>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={testimonial.profilePic || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&color=fff&size=128`}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-red-500/80"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&color=fff&size=128`;
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-medium text-white">{testimonial.name}</div>
                      {testimonial.date && (
                        <div className="text-sm text-gray-400">{testimonial.date}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          <div className="swiper-button-next !text-red-500 !right-0"></div>
          <div className="swiper-button-prev !text-red-500 !left-0"></div>
          
          <div className="swiper-pagination !relative !mt-10"></div>
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonal;
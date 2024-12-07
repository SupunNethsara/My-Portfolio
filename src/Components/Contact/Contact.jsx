import React, { useState, useEffect } from 'react';

import ScrollReveal from 'scrollreveal';

export const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal('.form-sec', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      reset: true,
      easing: 'ease-in-out',
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '973166ad-0b45-4685-b614-ce057fe02722');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } else {
      console.error('Error:', res.message);
    }
  };

  return (
    <div className="h-full bg-transparent">
      <div className="container mx-auto py-10 text-center xl:text-left flex items-center justify-center h-full mt-10 px-4 md:px-8">
        <div className="flex flex-col w-full max-w-[700px] bg-opacity-80 backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 md:mb-12">
            Let's <span className="text-red-600">Connect</span>
          </h2>
          <form onSubmit={onSubmit} className="form-sec flex flex-col gap-4 md:gap-6 w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input w-full rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-white focus:ring-2 focus:ring-red-500 focus:outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input w-full rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-white focus:ring-2 focus:ring-red-500 focus:outline-none transition"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="input w-full rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-white focus:ring-2 focus:ring-red-500 focus:outline-none transition"
            />

            <textarea
              placeholder="Message"
              name="message"
              className="text-area w-full h-32 rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-white focus:ring-2 focus:ring-red-500 focus:outline-none transition"
            />

            <button
              type="submit"
              className="btn w-full md:w-auto rounded-full border border-red-600 px-6 py-3 text-white bg-red-600 hover:scale-105 transition duration-300"
            >
              Let's Talk
            </button>

            {showToast && (
              <div
                className="flex items-center p-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 mt-6"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div>
                  <span className="font-medium">Success alert!</span> Message sent successfully.
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

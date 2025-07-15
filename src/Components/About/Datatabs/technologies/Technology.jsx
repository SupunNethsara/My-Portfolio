import React from 'react'
import "./Technology.css"
import { RiReactjsLine } from 'react-icons/ri';
import { SiFirebase } from 'react-icons/si';
export const Technology = () => {
  return (
    <div className='tech'>
    
                <div className="mt-3">
               
                  import {RiReactjsLine} from 'react-icons/ri';
                  import {SiFirebase} from 'react-icons/si';
    
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                    {[
                      'React', 'laravel', 'JavaScript', 'TypeScript', 'Cloudinary', 'next.js',
                      'Node.js', 'Firebase', 'Tailwind CSS', 'mySQL', 'Redux',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800/50 border border-gray-700 text-gray-200 hover:bg-gray-700/50 hover:text-white hover:border-red-400/50 transition-all flex items-center"
                      >
                        {skill}
    
                        {skill === 'React' && <RiReactjsLine className="ml-1.5 text-blue-400" />}
                        {skill === 'Firebase' && <SiFirebase className="ml-1.5 text-orange-400" />}
                      </span>
                    ))}
                  </div>
    
                </div>
    </div>
  )
}

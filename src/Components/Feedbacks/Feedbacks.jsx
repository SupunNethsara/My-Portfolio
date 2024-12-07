import React from 'react'
import ModalExample from './Buttonview'
import Testimonal from './Testimonal'




function Feedbacks() {
    return (
        <div className='h-full grid text-center'>
            <div>
                <ModalExample />
            </div>
            <div className=' container mx-auto h-full flex flex-col justify-center'>
              <h2 style={{fontSize:'30px'}} className='h2 mb-8 xl:mb-0 text-white'>
                What Clients<span className=' text-red-600'> Say .</span>
              </h2>
              {/*slider*/}
              <div className='mt-20'>
                <Testimonal/>
              </div>
            </div>
        </div>
    )
}

export default Feedbacks
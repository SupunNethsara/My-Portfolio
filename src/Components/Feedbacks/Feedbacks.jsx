import { useState } from 'react'
import ModalExample from './ModalExample'
import Testimonal from './Testimonal'

function Feedbacks() {
  const [showmodal, setshowmodal] = useState(false)

  const handleModalOpen = () => {
    setshowmodal(!showmodal)
  }

  return (
    <div className='h-full grid text-center'>
      <div>
         <ModalExample isOpen={showmodal} onClose={() => setshowmodal(false)} />
        <button
          onClick={() => setshowmodal(true)}
          className="bg-red-500 text-white font-medium rounded-lg px-4 py-2 float-right m-6 hover:bg-red-600 transition"
        >
          + Add Comment
        </button>
      </div>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        <h2 style={{ fontSize: '30px' }} className='h2 mb-8 xl:mb-0 text-white'>
          What Clients<span className=' text-red-600'> Say .</span>
        </h2>
        <div className='mt-20'>
          <Testimonal />
        </div>
      </div>
    </div>
  )
}

export default Feedbacks
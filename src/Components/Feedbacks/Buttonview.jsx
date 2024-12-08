import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { db } from "./FirebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [profilePic, setProfilePic] = useState(null);
 
  const handleProfilePicChange = (e) => {
    // const file = e.target.files[0];
    // if (file) {
    //   setProfilePic(file);
    if(e.target.files[0]){
      setProfilePic(e.target.files[0]);
    }
    // }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedback = {
      name,
      comment,
      profilePic: profilePic ? URL.createObjectURL(profilePic) : null,
      timestamp: new Date(),
    };

    try {
      const feedbackRef = collection(db, "feedbacks");
      await addDoc(feedbackRef, feedback);

      setName("");
      setComment("");
      setProfilePic(null);
      setIsOpen(false);
   
   
    } catch (error) {
      console.error("Error adding feedback:", error);
    }
  };



  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-500 text-white font-medium rounded-lg px-4 py-2 float-right m-6 hover:bg-red-600 transition"
      >
        + Add Comment
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-6 text-white">
              <Dialog.Title className="text-2xl font-bold text-center mb-4">
                Submit Feedback
              </Dialog.Title>
              <form onSubmit={handleSubmit} className="space-y-4">
      
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg bg-gray-800 border border-gray-700 p-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-red-500 outline-none transition"
                  required
                />

            
                <textarea
                  placeholder="Enter your comment"
                  rows="4"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full rounded-lg bg-gray-800 border border-gray-700 p-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-red-500 outline-none transition"
                  required
                ></textarea>

              
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className="block w-full text-sm text-gray-300 bg-gray-800 rounded-lg border border-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-red-500 file:text-white hover:file:bg-red-600"
                />

            
                {profilePic && (
                  <img
                    src={URL.createObjectURL(profilePic)}
                    alt="Profile Preview"
                    className="w-20 h-20 rounded-full mt-4 mx-auto"
                  />
                )}

         
                <div className="flex justify-end space-x-4">
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    Close
                  </button>
                
              
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ModalExample;

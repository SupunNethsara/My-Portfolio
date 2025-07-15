import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./FirebaseConfig";
import axios from "axios";

function ModalExample({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { 
        setError("Image size should be less than 2MB");
        return;
      }
      setError(null);
      setProfilePic(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      setError("Name and comment are required");
      return;
    }

    setIsSubmitting(true);

    try {
      let imageUrl = null;

      if (profilePic) {
        const extension = profilePic.name.split('.').pop();
        const fileName = `profilePics/${Date.now()}.${extension}`;
        const storageRef = ref(storage, fileName);

        await uploadBytes(storageRef, profilePic);
        imageUrl = await getDownloadURL(storageRef);
      }

      const feedbackData = {
        name: name.trim(),
        comment: comment.trim(),
        profilePic: imageUrl || null,
        timestamp: new Date().toISOString()
      };
      await axios.post(
        "https://my-portfolio-c00bd-default-rtdb.firebaseio.com/feedbacks.json",
        feedbackData
      );
      
      setName("");
      setComment("");
      setProfilePic(null);
      onClose();
      
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      as="div"
      className="relative z-50"
      open={isOpen} 
      onClose={onClose}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-6 text-white">
          <Dialog.Title className="text-2xl font-bold text-center mb-4">
            Submit Feedback
          </Dialog.Title>
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 text-red-300 rounded-lg text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              minLength="2"
              required
              className="w-full rounded-lg bg-gray-800 border border-gray-700 p-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-red-500 outline-none transition"
            />

            <textarea
              placeholder="Enter your comment"
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              minLength="10"
              required
              className="w-full rounded-lg bg-gray-800 border border-gray-700 p-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-red-500 outline-none transition"
            ></textarea>
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Profile Picture (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="block w-full text-sm text-gray-300 bg-gray-800 rounded-lg border border-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-red-500 file:text-white hover:file:bg-red-600"
                disabled={isSubmitting}
              />
            </div>
            {profilePic && (
              <div className="flex justify-center">
                <img
                  src={URL.createObjectURL(profilePic)}
                  alt="Preview"
                  className="w-20 h-20 rounded-full object-cover border-2 border-red-500"
                />
              </div>
            )}
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-medium transition ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default ModalExample;
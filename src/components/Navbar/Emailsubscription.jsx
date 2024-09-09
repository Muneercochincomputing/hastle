import React, { useState, forwardRef } from 'react';
import axios from 'axios';

const Emailsubscription = forwardRef((props, ref) => {
  const [email, setEmail] = useState(""); // Initialize email to an empty string
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage submission status

  const addSubscribers = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) { // Basic email validation
      alert("Please enter a valid email address.");
      return;
    }

    const subscribers = {
      email: email
    };

    try {
      setIsSubmitting(true); // Disable button on submission start
      await axios.post("http://localhost:8082/subscribers/", subscribers);
      console.log("Success");

      setEmail(""); // Clear email after successful submission
      alert("Contact submitted successfully");
    } catch (error) {
      console.error("Error contact submission, try later:", error);
      alert("Error submitting contact, please try later.");
    } finally {
      setIsSubmitting(false); // Re-enable button after submission ends
    }
  };

  return (
    <div ref={ref}>
      {/* Subscription Section */}
      <div className="bg-gradient-to-r from-primary mt-10 to-primary py-20 px-6 relative font-[sans-serif]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white text-4xl font-extrabold">Subscribe to Our Newsletter</h2>
          <div className="my-6">
            <p className="text-base text-gray-200">
              Subscribe to our newsletter and stay up to date with the latest news, updates, and exclusive offers. Get valuable insights. Join our community today!
            </p>
          </div>

          <div className="max-w-2xl mx-auto w-full bg-white p-5 flex items-center shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-50 py-3.5 px-4 text-gray-800 text-base focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-[#a91079] hover:bg-[#a91079e2] text-white text-base font-semibold tracking-wide py-3.5 px-6 focus:outline-none"
              onClick={addSubscribers}
              disabled={!email || isSubmitting} // Disable button if email is empty or submitting
            >
              {isSubmitting ? "Submitting..." : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Emailsubscription;

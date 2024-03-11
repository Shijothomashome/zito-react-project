import React from "react";
import useOnline from "../utils/useOnline";
import NoInternet from "./NoInternet";

const Contact = () => {
  const isOnline = useOnline()

  if (!isOnline) {
    return <NoInternet />
  }

  return (
    <>
      <div className="flex justify-center items-center  sm:my-20">
        <div className=" mx-auto flex flex-col justify-center items-center ">
          {/* Left side with Google Map */}
          <div className=" h-96 overflow-hidden w-full ">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7470247286826!2d76.66079861479476!3d10.788542760810979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5d2ff6a25b3c1%3A0x30bb3d1c7f3050b7!2sPalakkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1646735905534!5m2!1sen!2sin"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
          {/* Right side with contact section */}
          <div className="w-full  -mb-16 sm:mb-0  p-8  text-orange-500 bg-white py-20">
            <h2 className="text-2xl font-medium mb-4 -mt-10 text-black text-center">Contact Us</h2>
            <p className="mb-4 text-black">
              Thank you for your interest in contacting us. If you have any questions or inquiries, please don't hesitate to reach out. We are here to assist you in any way we can.
            </p>
            <ul className=" pl-4 text">
              <li className="text-blue-600"><i class="fa-solid fa-envelope mr-1 "></i> shijothomashome@gmail.com</li>
              <li className="text-blue-600"><i class="fa-solid fa-phone mr-1"></i>  +917034436073</li>
              <li className="text-blue-600"><i class="fa-solid fa-location-dot mr-1"></i> Palakkad, Kerala, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-white bg-black pb-10 pt-32 sm:pt-20 ">
        <div className="container mx-auto p-8 w-11/12  sm:max-w-md bg-white text-black rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-8 text-center text-gray-700">Send Message</h1>
          <form className="space-y-4 ">
            <div>
              <label htmlFor="name" className="block font-bold mb-2  text-gray-700">Name:</label>
              <input type="text" id="name" name="name" className="text-black w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold mb-2  text-gray-700">Email:</label>
              <input type="email" id="email" name="email" className="text-black  w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500" required />
            </div>
            <div>
              <label htmlFor="message" className="block font-bold mb-2  text-gray-700">Message:</label>
              <textarea id="message" name="message" className="text-black  w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-500" rows="5" required></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-700">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

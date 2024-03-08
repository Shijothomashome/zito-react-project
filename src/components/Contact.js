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
       <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto p-8 max-w-md bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        <form className="space-y-4" action="#" method="POST">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
            <textarea id="message" name="message" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" rows="5" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>

    <div className="flex justify-center items-center h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row ">
        {/* Left side with Google Map */}
        <div className="md:w-1/2 h-96 overflow-hidden w-full mr-4 ">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7470247286826!2d76.66079861479476!3d10.788542760810979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5d2ff6a25b3c1%3A0x30bb3d1c7f3050b7!2sPalakkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1646735905534!5m2!1sen!2sin"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
        {/* Right side with contact section */}
        <div className="md:w-1/2 bg-gray-100 p-8 ">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            velit ac est tristique feugiat. Aenean egestas risus in felis
            tincidunt, vel condimentum justo ultricies.
          </p>
          <ul className="list-disc pl-4">
            <li>Email: example@example.com</li>
            <li>Phone: +1234567890</li>
            <li>Address: Palakkad, Kerala, India</li>
          </ul>
        </div>
      </div>
    </div>
 

</>
    );
};

export default Contact;

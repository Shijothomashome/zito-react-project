import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
  
    <footer className="bg-black text-gray-400  py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 sm:gap-10">
        <div className="md:w-1/3">
          <h2 className="text-xl font-bold mb-4 text-orange-400">About Us</h2>
          <p className="text-sm">
          Welcome to Zito! We're your one-stop destination for all things food. From delicious recipes to helpful cooking hacks, we've got you covered. Join us on our culinary journey and let's explore the wonderful world of flavors together.</p>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <h2 className="text-xl font-bold mb-4 text-orange-400">Contact Us</h2>
          <p className="text-sm">
            Email: shijothomashome@gmail.com <br />
            Phone: +917034436073 <br />
            Address: Palakkad, Kerala, India
          </p>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <h2 className="text-xl font-bold mb-4 text-orange-400">Follow Us</h2>
          <div className="flex items-center space-x-4">
            <Link target="_blank" to="https://www.facebook.com/shijo.thomas.71066?mibextid=JRoKGi" className="text-lg">
              <i className="fab fa-facebook-square text-gray-100 "></i>
            </Link>
            <Link target="_blank" to="https://linkedin.com/in/shijo-thomas-home" className="text-lg">
            <i className="fa-brands fa-x-twitter text-gray-100"></i>
            </Link>
            <Link target="_blank" to="https://www.instagram.com/_shijo_thomas_____/" className="text-lg ">
              <i className="fab fa-instagram-square text-gray-100"></i>
            </Link>
            <Link target="_blank" to="https://linkedin.com/in/shijo-thomas-home" className="text-lg ">
            <i class="fa-brands fa-linkedin text-gray-100"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">© {year} Zito. All rights reserved.</p>
         <p><i className="fa-regular fa-copyright"></i> </p>

      </div>
    </footer>
  );
};

export default Footer;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import zito from "../images/zito.png"
import { useSelector } from "react-redux";
import { authentication } from "../utils/helper";
import user_logo from '../images/user_logo.png'

const Logo = () => (
  <Link to='/'>
    <img className='sm:w-16 sm:h-16 rounded-lg w-14 h-14' src={zito} alt='logo' />
  </Link>
);

const Header = () => {

  const [isLoggedIn, login, logout] = authentication();

  // subscribing the store using useSelector hook
  const cartItems = useSelector(store => store.cart.items)  // SUBSCRIBING TO CART SLICE OF STORE
  console.log(cartItems);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Toggling hambergermenu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  /**
   * setIsMobileMenuOpen is a function provided by the useState hook, which updates the state value isMobileMenuOpen.
   * (prevState => !prevState) is an updater function used as an argument to setIsMobileMenuOpen. This function takes the previous state value (prevState) 
   *  and returns the new state value. In this case, it toggles the boolean value by negating it (!prevState), 
   *  which means if prevState is true, it becomes false, and vice versa.
   */

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Toggling profile menu
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-white border shadow-md py-0 fixed top-0 left-0 right-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2"
              onClick={toggleMobileMenu}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>   {/* screen readers only class for visually impaired  */}
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
            {/* Always visible logo */}
            <div className="flex flex-shrink-0 items-center">
              <Logo />
            </div>
            {/* nav-items for desktop view */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/" onClick={closeMobileMenu} className="hover:text-orange-600 rounded-md px-3 py-2 text-md font-medium">Home</Link>
                <Link to="/about" onClick={closeMobileMenu} className="hover:text-orange-600 rounded-md px-3 py-2 text-md font-medium">About</Link>
                <Link to="/contact" onClick={closeMobileMenu} className="hover:text-orange-600 rounded-md px-3 py-2 text-md font-medium">Contact</Link>
                <Link to="/faqs" onClick={closeMobileMenu} className="hover:text-orange-600 rounded-md px-3 py-2 text-md font-medium">FAQs</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* cart */}
            <Link
              to="/cart"
              className="relative p-1 focus:outline-none mx-6 sm:mr-16"
            >
              <i className="text-2xl fa-solid fa-cart-shopping"></i>
              <span className="absolute -right-2 -top-0.5 rounded-full text-center text-white h-5 w-5 bg-green-600 flex items-center justify-center">
                <span data-testid="cart" >{cartItems.length}</span>
              </span>
            </Link>

            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  onClick={toggleProfileMenu}
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={isProfileMenuOpen}
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user_logo}
                    alt=""
                  />
                </button>
              </div>
              {isProfileMenuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Link to="#" className="block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                    Your Profile
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="user-menu-item-2">
                    Login
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="user-menu-item-2">
                    SignUP
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link to="/" onClick={closeMobileMenu} className="hover:text-orange-600 block rounded-md px-3 py-2 text-base font-medium">Home</Link>
          <Link to="/about" onClick={closeMobileMenu} className="hover:text-orange-600 block rounded-md px-3 py-2 text-base font-medium">About</Link>
          <Link to="/contact" onClick={closeMobileMenu} className="hover:text-orange-600 block rounded-md px-3 py-2 text-base font-medium">Contact</Link>
          <Link to="/faqs" onClick={closeMobileMenu} className="hover:text-orange-600 block rounded-md px-3 py-2 text-base font-medium">FAQs</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

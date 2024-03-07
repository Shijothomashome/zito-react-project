import { Link } from "react-router-dom";
import { authentication } from "../utils/helper";
import { useSelector } from "react-redux";
import { useState } from "react";
import zito from "../images/zito.png"

const Logo = () => (
  
  <Link to='/'>
    <img className='sm:w-24 sm:h-20 rounded-lg w-14 h-12' src={zito} alt='logo' />
</Link>

);



const Header = () => {
    const [isLoggedIn, login, logout] = authentication();

    // subscribing the store using useSelector hook
    const cartItems = useSelector(store => store.cart.items)  // SUBSCRIBING TO CART SLICE OF STORE
    console.log(cartItems);

    const[isMobileMenuOpen, setIsMobileMenuOpen] = useState()
    const[isProfileMenuOpen, setIsProfileMenuOpen] = useState()
    
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
   
    const toggleProfileMenu = () => {
      setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
      <nav className="bg-white  shadow-md py-3 fixed top-[-1px] left-0 right-0 z-10">
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
                   <span className="sr-only">Open main menu</span>
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
                 <div className="flex flex-shrink-0 items-center">
                   <Logo />
                 </div>
                 <div className="hidden sm:ml-6 sm:block">
                   <div className="flex space-x-4">
                     <Link to="/" className=" rounded-md px-3 py-2 text-md font-medium">
                       Home
                     </Link>
                     <Link to="/about" className=" rounded-md px-3 py-2 text-md font-medium">
                       About
                     </Link>
                     <Link to="/contact" className=" rounded-md px-3 py-2 text-md font-medium">
                       Contact
                     </Link>
                     <Link to="/instamart" className=" rounded-md px-3 py-2 text-md font-medium">
                       Instamart
                     </Link>
                   </div>
                 </div>
               </div>
               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                 <Link
                   to="/cart"
                   className="relative p-1 focus:outline-none mx-4"
                 >
                   <i class="text-2xl fa-solid fa-cart-shopping"></i>
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
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
      
       {/* <!-- Mobile menu, show/hide based on menu state. --> */}
       <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
         <div className="space-y-1 px-2 pb-3 pt-2">
           {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
           <Link to="/" className="  block rounded-md px-3 py-2 text-base font-medium">HOME</Link>
           <Link to="/about" className="  block rounded-md px-3 py-2 text-base font-medium">ABOUT</Link>
           <Link to="/faq" className="  block rounded-md px-3 py-2 text-base font-medium">FAQ'S</Link>
           <Link to="/contact" className="  block rounded-md px-3 py-2 text-base font-medium">CONTACT</Link>
           <Link to="/instamart" className="  block rounded-md px-3 py-2 text-base font-medium">INSTAMART</Link>
         </div>
       </div>
     </nav>
  );

};

export default Header;


import { Link } from "react-router-dom";
import { authentication } from "../utils/helper";

const Logo = () => (
  <Link to='/'>
    <img className='w-24 h-20' src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg' alt='logo' />
  </Link>
);

const Header = () => {
  const [isLoggedIn, login, logout] = authentication();

  return (
    <div className='flex justify-between p-4 shadow-xl mb-6'>
      <Logo />

      <div className='flex items-center'>
        <ul className='flex sm:w-96 justify-around mr-2 sm:mr-0 '>
          <li className="mx-1">
            <Link to='/'>Home</Link>
          </li>
          <li className="mx-1">
            <Link to='/about'>About</Link>
          </li>
          <li className="mx-1">
            <Link to='/contact'>Contact</Link>
          </li>
          <li className="mx-1">Cart</li>
        </ul>

        <ul className='login-status '>
          {isLoggedIn ? (
            <li>
              <button className='bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded' onClick={logout}>Logout</button>
            </li>
          ) : (
            <li>
              <button className='bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded' onClick={login}>Login</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;

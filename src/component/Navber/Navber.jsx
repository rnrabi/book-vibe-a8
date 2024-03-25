import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <NavLink className="btn btn-ghost text-xl">Book Vibe</NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className={({isActive})=>isActive ? 'font-bold text-green-600' : 'btn btn-ghost text-xl'}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/listedBook' className={({isActive})=>isActive ? 'font-bold text-green-600' : 'btn btn-ghost text-xl'}>Listed books</NavLink>
            </li>
            <li>
              <NavLink to='/pageToRead' className={({isActive})=>isActive ? 'font-bold text-green-600' : 'btn btn-ghost text-xl'}>Pages to Read</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn">Sign In</a>
          <a className="btn">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;

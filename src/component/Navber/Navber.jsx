import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <NavLink to='/' className="btn btn-ghost text-2xl font-extrabold text-green-600">Book Vibe</NavLink>
        </div>

        <div className=" gap-4 navbar-center hidden lg:flex">
          
              <NavLink to='/' className={({isActive})=>isActive ? 'font-bold text-green-600 underline' : ''}>Home</NavLink>
           
              <NavLink to='/listedBook' className={({isActive})=>isActive ? 'font-bold text-green-600 underline' : ''}>Listed books</NavLink>
           
              <NavLink to='/pageToRead' className={({isActive})=>isActive ? 'font-bold text-green-600 underline' : ''}>Pages to Read</NavLink>
              <NavLink to='/blogs' className={({isActive})=>isActive ? 'font-bold text-green-600 underline' : ''}>Blogs</NavLink>
              <NavLink to='/contact' className={({isActive})=>isActive ? 'font-bold text-green-600 underline' : ''}>Contact</NavLink>
           
        </div>

        <div className="navbar-end">
          <a className="btn bg-green-500">Sign In</a>
          <a className="btn bg-[#59C6D2]">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;

import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <NavLink to="/asia" className="btn btn-ghost normal-case text-xl">Rest Country</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="mr-4"><NavLink to="/all" 
      className={({ isActive, isPending }) =>
      isPending ? "" : isActive ? "bg-lime-500 rounded-lg underline text-white" : ""
    }>All</NavLink></li>
      <li className="mr-4" ><NavLink to="/asia"
      className={({ isActive, isPending }) =>
      isPending ? "" : isActive ? "bg-lime-500 rounded-lg underline text-white" : ""
    }
    >Asia</NavLink></li>
      <li className="mr-4"><NavLink to="/europ"
       className={({ isActive, isPending }) =>
      isPending ? "" : isActive ? "bg-lime-500 rounded-lg underline text-white" : ""
    }>Europ</NavLink></li>
      <li className="mr-4"><NavLink to="/africa"
      className={({ isActive, isPending }) =>
      isPending ? "" : isActive ? "bg-lime-500 rounded-lg underline text-white" : ""
    }>Africa</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
    );
};

export default Navbar;
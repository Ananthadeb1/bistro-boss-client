import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const NevBar = () => {
    const {user, logOut}=useContext(AuthContext)
    const handleSignOut =()=>{
        logOut();
    }
  const nevOptions = 
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/order/salad">Order</Link></li>
      { user? <><button onClick={handleSignOut} className="pt-[2px] ml-[5px] text-sm">SignOut</button></> : <><li><Link to="/login">LogIn</Link></li></>}
    </>
 

  return (
    <>
      <div className="navbar fixed z-10 bg-black bg-opacity-50 text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                {nevOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {nevOptions}
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn text-white" >Button</a>
        </div>
      </div>
    </>
  );
};

export default NevBar;
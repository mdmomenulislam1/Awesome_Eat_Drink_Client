import { Link, NavLink } from "react-router-dom";
import { BsPersonAdd } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";



const Navbar = () => {
  // const { logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }


  return (
    <div className="navbar bg-neutral lg:px-16 lg:py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold hover:text-white hover:bg-green"
              }
            >
              Home
            </NavLink></li>

            <li><NavLink
              to="/AboutUs"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
              }
            >
              About Us
            </NavLink></li>

            <li><NavLink
              to="/addCard"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
              }
            >
              Add Card
            </NavLink></li>

            <li><NavLink
              to="/logIn"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
              }
            >
              Login
            </NavLink></li>

            <li><NavLink
              to="/registration"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
              }
            >
              Registration
            </NavLink></li>
            <li><NavLink
              to="/myCard"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
              }
            >
              My Card
            </NavLink></li>

          </ul>
        </div>
        <h2 className="text-3xl text-white font-bold">Social Events Master</h2>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">

          <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
            }
          >
            Home
          </NavLink></li>

          <li><NavLink
            to="/AboutUs"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
            }
          >
            About Us
          </NavLink></li>

          <li><NavLink
            to="/addCard"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
            }
          >
            Add Card
          </NavLink></li>


          <li><NavLink
            to="/logIn"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
            }
          >
            Login
          </NavLink></li>


          <li><NavLink
            to="/registration"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
            }
          >
            Registration
          </NavLink></li>
          <li><NavLink
            to="/myCard"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-black text-white  font-bold" : "text-black bg-white  font-bold"
            }
          >
            My Card
          </NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">

        
              {/* <img src={user.photoURL} alt="" className="w-[50px] h-[50px] rounded-full m-5" /> */}
              <button onClick={handleSignOut} className="btn">Log Out</button>
            

            
            <Link to={"/logIn"} className="flex ">
              <BsPersonAdd className="text-3xl text-white font-bold mx-5"></BsPersonAdd>
              <button className="btn">Log In</button>
            </Link>
        
      </div>
    </div>
  );
};

export default Navbar;
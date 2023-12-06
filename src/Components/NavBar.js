// Import statements remain unchanged
import {Link} from 'react-router-dom'
import { useState } from 'react';


// Import statements remain unchanged

const NavBar = () => {
    const [flag, setFlag] = useState("hidden");
  
    const menuOptionClass =
      "block py-2 pl-3 pr-4 text-white bg-blue-700 hover:text-blue-200 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent";
  
    return (
      <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/iplteaminfowebapp.appspot.com/o/logo-removebg-preview.png?alt=media&token=b696dca4-f219-4372-bcc4-d360a1e4c239" width={80} height={80} alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            onClick={() => {
              setFlag(flag === "hidden" ? "block" : "hidden");
            }}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              flag === "hidden" ? "hidden" : "block"
            } w-full md:flex md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/">
                  <li className={menuOptionClass} aria-current="page">
                    Home
                  </li>
                </Link>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100  md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-white md:dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Services{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700 dark:divide-gray-600 md:absolute md:top-14"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link to="/Services/Workout">
                        <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Workout
                        </li>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services/Diets">
                        <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Diets-Plans
                        </li>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services/vitals">
                        <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Vitals
                        </li>
                      </Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link to="/Services/Signout">
                      <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Sign Out
                      </h1>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/schedules">
                  <li className={menuOptionClass} aria-current="page">
                    Schedules
                  </li>
                </Link>
              </li>
              <li>
                <Link to="/About">
                  <li className={menuOptionClass} aria-current="page">
                    About us
                  </li>
                </Link>
              </li>
              <li>
                <Link to="/Contact">
                  <li className={menuOptionClass} aria-current="page">
                    Contact us
                  </li>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  
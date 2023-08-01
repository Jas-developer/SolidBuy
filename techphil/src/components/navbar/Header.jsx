import { NavLink } from "react-router-dom";
import { ShopContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react";

export const Header = () => {
  const [added, setAdded] = useState("");
  const { cartCount } = useContext(ShopContext);

  useEffect(() => {
    setAdded("text-xl transition duration:700");
    setAdded("scale:100");
  }, [cartCount]);

  return (
    <div className="flex flex-row justify-end px-12 p-6 bg-black ">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 ">
          <li className="inline-flex items-center">
            <NavLink
              to="/"
              className="inline-flex  items-center text-sm font-medium text-white hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </NavLink>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <NavLink
                to="/status"
                className="ml-1 text-sm font-medium text-white hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Orders
              </NavLink>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <NavLink to="/contact">
                <span className="ml-1 text-sm font-medium text-white md:ml-2 dark:text-gray-400">
                  Contact
                </span>
              </NavLink>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <NavLink to="/cart">
                <span
                  data-count={cartCount}
                  className={`cart relative ml-2 text-sm font-medium text-white md:ml-2 dark:text-gray-400 ${added}`}
                >
                  Cart
                </span>
              </NavLink>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

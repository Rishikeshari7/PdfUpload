import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const changeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-between items-center py-5 px-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-md">
      <p className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text dark:from-yellow-400 dark:via-red-500 dark:to-pink-500">
        Dev Detection
      </p>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl mx-3"
        ><RxHamburgerMenu/>
        </button>
      </div>
      <div
        className={`text-lg flex-col md:flex-row md:flex gap-5  ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <NavLink
          to="/upload"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 dark:text-yellow-400 font-bold underline"
              : "text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400"
          }
        >
          Upload
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 dark:text-yellow-400 font-bold underline"
              : "text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400"
          }
        >
          Details
        </NavLink>
      </div>

      {/* Day/Night Toggle */}
      <div onClick={changeHandler} className="flex items-center gap-4">
        {theme === "dark" ? (
          <MdLightMode className=" text-2xl   cursor-pointer text-yellow-500" />
        ) : (
          <MdDarkMode className=" text-2xl   cursor-pointer text-gray-700" />
        )}
        <button
          onClick={changeHandler}
          className={`px-4 py-2 hidden sm:block rounded-xl font-semibold transition-colors duration-300 ${
            theme === "dark"
              ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

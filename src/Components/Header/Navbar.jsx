import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Authcontext } from '../../Provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(Authcontext);

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const handleToggle = (e) => {
        setTheme(e.target.checked ? "dark" : "light");
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-red-600 font-bold" : ""}>Home</NavLink></li>
            <li><NavLink to="/allplants"  className={({ isActive }) => isActive ? "text-red-600 font-bold" : ""}>All Plants</NavLink></li>
            <li><NavLink to="/addplant"  className={({ isActive }) => isActive ? "text-red-600 font-bold" : ""}>Add Plant</NavLink></li>
            <li><NavLink to="/myplants"  className={({ isActive }) => isActive ? "text-red-600 font-bold" : ""}>My Plants</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 px-4 md:px-10">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link className="text-xl font-bold flex items-center gap-2">
                    <p><span className="text-green-600">Mango</span><span className="text-yellow-500">Fango</span></p>
                    <img className="w-8 h-8" src="/icons8-mango-48.png" alt="logo" />
                </Link>
            </div>

            {/* Center nav links for large screens */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            
            {/* End Section: Theme toggle + Profile/Login */}
            <div className="navbar-end flex items-center gap-3">
                {/* Theme Toggle */}
                <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        onChange={handleToggle}
                        checked={theme === "dark"}
                    />
                    {/* Sun icon */}
                    <svg
                        className="swap-on h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    {/* Moon icon */}
                    <svg
                        className="swap-off h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>

                {/* Profile & Auth Section */}
                {user?.email ? (
                    <div className="flex items-center gap-3">
                        <div
                            className="tooltip tooltip-bottom"
                            data-tip={user.displayName}
                        >
                            <img
                                className="w-10 h-10 rounded-full cursor-pointer"
                                src={user?.photoURL || "/default-avatar.png"}
                                alt="User"
                            />
                        </div>
                        <button onClick={logOut} className="btn btn-sm md:btn">
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Link to="/login">
                            <button className="btn btn-sm bg-green-600 text-red-600">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-sm bg-green-600 text-red-600">Register</button>
                        </Link>
                    </div>
                )}
            </div>


        </div>
    );
};

export default NavBar;

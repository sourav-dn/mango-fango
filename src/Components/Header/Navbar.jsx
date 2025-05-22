import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Authcontext } from '../../Provider/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(Authcontext);

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <a className="text-xl font-bold"><span className='text-green-600'>Mango</span><span className='text-yellow-500'>Fango</span></a>
                    <img className='size-10' src="/public/icons8-mango-48.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allplants'>All Plants</NavLink></li>
                        <li><NavLink to='/addplant'>Add Plant</NavLink></li>
                        <li><NavLink to='/myplants'>My Plants</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox"
                            onChange={handleToggle}
                            checked={theme === "light" ? false : true} />

                        {/* sun icon */}
                        <svg
                            className="swap-on h-8 w-8 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-off h-7 w-7 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>

                    {/* user profile */}
                    <div className='relative group z-50'>
                        {user && user?.email ? (
                            <div>
                                <img className="w-10 h-10 rounded-full cursor-pointer"
                                    src={user?.photoURL}
                                    alt={user?.displayName} />

                                {/* hover */}
                                <div className='absolute flex flex-col items-center right-0 top-12 gap-2 opacity-0 group-hover:opacity-100 z-50'>
                                    <button className='bg-blue-500 text-white px-2 py-1 rounded'>
                                        {user.displayName}
                                    </button>
                                    <button onClick={logOut}
                                        className="bg-green-600 text-red-600 px-2 py-1 rounded">
                                        LogOut</button>
                                </div>
                            </div>
                        ) : (
                            
                            <div className="flex gap-2">
                                <Link to="/login">
                                    <button className="btn bg-[#596def] text-white">Login</button>
                                </Link>
                                <Link to="/register">
                                    <button className="btn bg-[#596def] text-white">Register</button>
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NavBar;
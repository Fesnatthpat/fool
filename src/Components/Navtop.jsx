import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navtop() {

    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }


    return (
        <div className="container">
            <nav className="bg-gray-900 p-2 fixed start-0 end-0 top-0 right-0 z-10">
                <div className="flex items-center justify-between px-5">

                    {/* Avatar */}
                    <div className="dropdown dropdown-start md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-12">
                                <span>SY</span>
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="btn btn-ghost text-white text-2xl font-bold">F1</div>
                    <div className="md:hidden">
                        <button id="menu-toggle" className="text-white btn btn-ghost" onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>

                    {/* Menu-Laptop */}
                    <ul className="hidden md:flex space-x-4">
                        <li className='btn btn-ghost'><a href="#" className="text-white">Home</a></li>
                        <li className='btn btn-ghost'><a href="#" className="text-white">About</a></li>
                        <li className='btn btn-ghost'><a href="#" className="text-white">Services</a></li>
                        <li className='btn btn-ghost'><a href="#" className="text-white">Contact</a></li>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                    <span>SY</span>
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to={"/profile1"}>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </Link>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </ul>
                </div>

                {/* Menu-Mobile */}
                {isMenuOpen ? (
                    <ul className="flex-col md:hidden px-5 text-center">
                        <li className='py-2'><a href="#" className="text-white btn btn-ghost">Home</a></li>
                        <li className='py-2'><a href="#" className="text-white btn btn-ghost">About</a></li>
                        <li className='py-2'><a href="#" className="text-white btn btn-ghost">Services</a></li>
                        <li className='py-2'><a href="#" className="text-white btn btn-ghost">Contact</a></li>
                    </ul>
                ) : null}
            </nav>
        </div>


    )
}

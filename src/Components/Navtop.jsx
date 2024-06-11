import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navtop() {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isAvatarOpen, setAvatarOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        console.log("Menu toggled:", !isMenuOpen);  // ตรวจสอบสถานะการเปลี่ยนแปลง
    };

    const closeMenu = () => {
        setMenuOpen(false);
        console.log("Menu closed");  // ตรวจสอบการเรียกฟังก์ชัน
    };

    const toggleAvatar = () => {
        setAvatarOpen(!isAvatarOpen);
        console.log("Avatar toggled:", !isAvatarOpen);  // ตรวจสอบสถานะการเปลี่ยนแปลง
    };

    const closeAvatar = () => {
        setAvatarOpen(false);
        console.log("Avatar closed");  // ตรวจสอบการเรียกฟังก์ชัน
    };

    return (
        <div className="container">
            <nav className="bg-gray-900 p-2 fixed start-0 end-0 top-0 right-0 z-10">
                <div className="flex items-center justify-between px-5">

                    {/* Avatar */}
                    <div className="flex-none dropdown dropdown-start md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder" onClick={toggleAvatar}>
                            <div className="bg-neutral text-neutral-content rounded-full w-12">
                                <span>SY</span>
                            </div>
                        </div>
                        {isAvatarOpen && (
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to={"/profile1"} onClick={closeAvatar}>
                                        <div className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </div>
                                    </Link>
                                </li>
                                <li><a onClick={closeAvatar}>Settings</a></li>
                                <li><a onClick={closeAvatar}>Logout</a></li>
                            </ul>
                        )}
                    </div>

                    {/* Spacer */}
                    <div className="flex-grow"></div>

                    {/* Logo */}
                    <Link to={"/"}>
                        <div className="btn btn-ghost text-white text-2xl font-bold">F1</div>
                    </Link>

                    {/* Spacer */}
                    <div className="flex-grow"></div>

                    {/* Menu Toggle for Mobile */}
                    <div className="flex-none md:hidden">
                        <button id="menu-toggle" className="text-white btn btn-ghost " onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0  24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>

                    {/* Menu for Laptop */}
                    <ul className="hidden md:flex space-x-4 flex-none">
                        <li className='btn btn-ghost'><a href="/" className="text-white">Home</a></li>
                        <Link to={"/product1"}>
                            <li className='btn btn-ghost'><a href="#" className="text-white">Projects</a></li>
                        </Link>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder" onClick={toggleAvatar}>
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                    <span>SY</span>
                                </div>
                            </div>
                            {isAvatarOpen && (
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to={"/profile1"} onClick={closeAvatar}>
                                            <div className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li><a onClick={closeAvatar}>Settings</a></li>
                                    <li><a onClick={closeAvatar}>Logout</a></li>
                                </ul>
                            )}
                        </div>
                    </ul>
                </div>

                {/* Menu for Mobile */}
                {isMenuOpen ? (
                    <ul className="flex-col md:hidden px-5 text-center">
                        <li className='py-2'><a href="/" className="text-white btn btn-ghost" onClick={closeMenu}>Home</a></li>
                        <Link to={"/product1"} onClick={closeMenu}>
                            <li className='btn btn-ghost'><a href="#" className="text-white">Projects</a></li>
                        </Link>
                    </ul>
                ) : null}
            </nav>
        </div>
    );
}

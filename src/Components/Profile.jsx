// import React from 'react'

export default function Profile() {
    return (
        <div className="flex justify-center min-h-screen py-20">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 bg-gray-900 p-6 md:p-10 rounded-xl m-5">
                <div className="flex justify-center items-center">
                    <div className="w-24 rounded-full avatar online z-0 ">
                        <img className="rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="text-white text-center mt-2">Natthpat Phummek</div>
                <div className="text-white text-center mt-2 text-sm">Natthpat@Phummek.com</div>
                <div className="flex justify-center items-center mt-5">
                    <div className="btn btn-active text-white">Edit</div>
                </div>
                <div className="flex justify-around items-center mt-10">
                    <div className="text-white border-b-2 border-t-2  p-4 ">99 K</div>
                    <div className="text-white border-b-2 border-t-2  p-4 ">19 K</div>
                    <div className="text-white border-b-2 border-t-2  p-4 ">119 K</div>
                </div>
                <ul className="menu bg-base-200 w-69 rounded-box mt-5">
                    <li>
                        <h2 className="menu-title">Title</h2>
                        <ul>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

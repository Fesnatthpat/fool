// import React from 'react'
import { Link } from "react-router-dom"

export default function From_pd() {
    return (

        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-gray-900 w-96 h-96 px-10 py-4 rounded-lg">
                <form>
                    <label className="input input-bordered flex items-center gap-2 my-4">

                        <input type="text" className="grow" placeholder="Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 my-4">

                        <input type="text" className="grow" placeholder="Detail" />
                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                    <div className="modal-action flex justify-between mt-20">
                        <form method="dialog" className='flex'>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn hover:bg-blue-700 text-white">Submit</button>
                        </form>

                        <form method="dialog" className='flex'>
                            <Link to={"/product1"}>
                                <button className="btn hover:bg-red-700 text-white">Close</button>
                            </Link>
                        </form>
                    </div>
                </form>
            </div>
        </div>
    )
}

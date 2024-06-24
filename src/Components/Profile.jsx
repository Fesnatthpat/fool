import { useState, useEffect } from 'react'
// import axios from 'axios'
import {remove, getdata} from '../Functions/Project'

export default function Profile() {
    const [data, setData] = useState([])

    useEffect(() => {
        //code
        loadData()
    }, [])

    const loadData = async () => {
        getdata()
        // await axios.get('http://localhost:5000/api/project')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    const handleRemove = async (id) => {
        remove(id)
        // await axios.delete('http://localhost:5000/api/project/' + id)
        .then((res) => {
            console.log(res)
            loadData()
        })
        .catch((err) => console.log(err))
    }


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
                <ul className="menu bg-base-200 rounded-box mt-5">
                    <div className="overflow-x-auto">
                        <table className="table-xs ">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>URL</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    data ? data.map((item, index) =>
                                        <tr key={index}>
                                            <th>{index+1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.detail}</td>
                                            <td>{item.url}</td>
                                            <td>
                                                <button className="btn btn-xs btn-primary mr-2">Edit</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-xs btn-danger" onClick={()=>handleRemove(item._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                        : null
                                }

                            </tbody>
                        </table>
                    </div>
                </ul>
            </div>
        </div>
    )
}

// import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import {create, getdata} from '../Functions/Project'

export default function From_pd() {
    const [form, setForm] = useState({})
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

    const handleChange = (e) => {
        // console.log(e.target.name,e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        create(form)
        // await axios.post('http://localhost:5000/api/project', form)
            .then(res => {
                console.log(res.data)
                loadData()
            })
            .catch((err) => console.log(err))
    }


    return (

        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-gray-900 w-96 h-96 px-10 py-4 rounded-lg">
                <form onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2 my-4">
                        <input type="text" name='name' onChange={e => handleChange(e)} className="grow" placeholder="Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 my-4">
                        <input type="text" name='detail' onChange={e => handleChange(e)} className="grow" placeholder="Detail" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 my-4">
                        <input type="text" name='url' onChange={e => handleChange(e)} className="grow" placeholder="URL" />
                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                    <div className="modal-action flex justify-between">
                        <div className='flex'>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn hover:bg-blue-700 text-white">Submit</button>
                        </div>
                        <div className='flex'>
                            <Link to={"/product1"}>
                                <button className="btn hover:bg-red-700 text-white">Close</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

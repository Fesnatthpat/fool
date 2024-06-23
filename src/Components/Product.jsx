import { useEffect, useState } from 'react';
import HeroPD from './HeroPD';
import './Product.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Product() {
    const [data, setData] = useState([])
    const [form, setForm] = useState({})

    useEffect(() => {
        //code
        loadData()
    }, [])

    const loadData = async () => {
        await axios.get('http://localhost:5000/api/project')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    const handleChange = (e) => {

    }

    return (
        <div className="">
            <HeroPD />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:p-10 m-5 my-10 ">
                {
                    data ? data.map((item, index) =>
                        <Link key={index} to={"/item_product"}>
                            <div className="card card-normal  bg-base-100 shadow-xl">
                                <figure><img src={item.file} alt={item.file} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {item.name}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{item.detall}</p>
                                    <p>{item.price}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Fashion</div>
                                        <div className="badge badge-outline">Products</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                        : null
                }
            </div>
        </div>
    );
}

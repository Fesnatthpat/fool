// import React from 'react'

export default function Items_Product() {
    return (
        <div className="min-w-full min-h-screen  flex justify-center items-center">
            <div className="flex flex-col md:flex-row w-full max-w-6xl m-2">
                <div className="w-full md:w-1/2 overflow-hidden">
                    <img 
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" 
                        alt="Shoes" 
                        className="w-full h-full object-cover" 
                    />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gray-100">
                    <h2 className="text-3xl font-bold mb-4 text-black">Product Title</h2>
                    <p className="text-lg mb-4 text-black">This is a short description of the product. It provides an overview of the features and benefits of the product.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

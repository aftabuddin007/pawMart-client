import React from 'react';
import { Link, useLoaderData } from 'react-router';

const ProductDetails = () => {
  
    const data = useLoaderData();
    const details = data.result;
    // console.log(details)
        const {name,category,price,location,image,_id,description,email} = details;

    return (
        <div>
                    <title>PawMart - {name}</title>

            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden mt-10 flex flex-col md:flex-row mb-20">
      {/* Left Side - Single Product Image */}
      <div className="md:w-1/2 bg-[#4e342e] flex justify-center items-center py-10">
        <img
          src={image}
          alt="Product"
          className="h-72 md:h-96 rounded-xl shadow-lg object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="md:w-1/2 p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Name: {name}
        </h2>
        <p >Category: {category}</p>
        <p>Email: {email}</p>
        <p className="text-green-600 font-medium mb-2">★ 4.4 | 421 Reviews</p>

        <p className="text-gray-600 mb-4 leading-relaxed">
         {description}
        </p>

        <p className="text-gray-700 mb-4">
          Location: {location}
        </p>

        <p>Price: {price}</p>

     

        

        <div className="flex flex-wrap items-center gap-4 mb-6">
          
          
        </div>

        <Link to={`/update-products/${_id}`} className="w-full bg-black text-white btn rounded-lg hover:bg-gray-800 transition duration-300">
          Order Now
        </Link>

        
      </div>
    </div>
        </div>
    );
};

export default ProductDetails;
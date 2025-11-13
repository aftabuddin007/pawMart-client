import React from 'react';
import { Link } from 'react-router';

const PetCard = ({product}) => {
    // console.log(product)
    const {name,category,price,location,image,_id} = product;
    return (
        <div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 group">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt="Pet"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 text-center">
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
          {name}
        </h3>

        <p className="text-gray-600 mt-2 text-sm">
          {location}
        </p>

        <p className="text-lg font-semibold mt-3 text-gray-900">
          Price: ${price}
        </p>

        <div className="mt-5">
          <Link
            to={`/product-details/${_id}`}
            className="btn btn-outline btn-info  font-semibold px-5 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            See Details →
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default PetCard;
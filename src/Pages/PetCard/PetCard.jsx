import React from 'react';
import { Link } from 'react-router';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const PetCard = ({ product }) => {
  const {
    name,
    category,
    price,
    location,
    image,
    description,
    status = "Available",
    rating = 4.5,
    date = "2025-01-01",
    _id
  } = product;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group">
      
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {category}
        </span>

        {/* Status Badge */}
        <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
          {status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
          {name}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {description || "High-quality pet supplies designed for comfort, safety, and everyday use."}
        </p>

        {/* Meta Info */}
        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>{location}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-900">
              $ {price}
            </span>

            <div className="flex items-center gap-1 text-yellow-400">
              <FaStar />
              <span className="text-gray-700 text-sm">{rating}</span>
            </div>
          </div>

          <p className="text-xs text-gray-400">
            Added on: {date}
          </p>
        </div>

        {/* Button */}
        <Link
          to={`/product-details/${_id}`}
          className="mt-5 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PetCard;

import React from 'react';
import { Link } from 'react-router';

const categoryData = [
  {
    id: 1,
    title: "Pets",
    total: 12,
    image: "https://i.ibb.co.com/Kjg4G2mY/pexels-cong-h-613161-1404819.jpg",
    gradient: "from-amber-200 to-amber-400",
  },
  {
    id: 2,
    title: "Pet Food",
    total: 12,
    image: "https://i.ibb.co.com/VYz9wkYn/pexels-mart-production-8434641.jpg",
    gradient: "from-orange-200 to-orange-400",
  },
  {
    id: 3,
    title: "Accessories",
    total: 34,
    image: "https://i.ibb.co.com/Q3fXjYTW/pexels-impact-dog-crates-1789722873-28332985.jpg",
    gradient: "from-yellow-200 to-yellow-400",
  },
  {
    id: 4,
    title: "Pet Care Product",
    total: 32,
    image: "https://i.ibb.co.com/Hf7BGyzb/61-C1-V-aw-Ii-L.jpg",
    gradient: "from-lime-200 to-lime-400",
  },
];





const PetCategory = () => {
    return (
    
     <div className="max-w-7xl mx-auto">
      <div className="py-6 px-3">
        <h2 className="text-3xl font-extrabold text-center my-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {categoryData.map((item) => (
            <Link
              key={item.id}
              to={`/category/${encodeURIComponent(item.title)}`} 
              className={`item p-2 bg-gradient-to-br ${item.gradient} rounded-2xl text-center flex items-center justify-center flex-col shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-15 sm:w-40 h-15 sm:h-40 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
              <h3 className="text-[12px] sm:text-[22px] font-bold mt-5 text-gray-800 group-hover:text-gray-900 transition-colors">
                {item.title}
              </h3>
              <p className="text-[12px] sm:text-lg font-medium mt-2 text-gray-700 group-hover:text-gray-900 transition-colors">
                Total {item.total}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
};

export default PetCategory;
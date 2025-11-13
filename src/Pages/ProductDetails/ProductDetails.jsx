import React, { use, useEffect, useState } from 'react';
import { Link,  useParams } from 'react-router';
import Loading from '../Loading/Loading';
import { AuthContext } from '../../Providers/AuthProvider';

const ProductDetails = () => {
  const {id} =useParams()
const [details,setDetails]=useState({})
const [loading,setLoading]=useState(true)
const {user} = use(AuthContext)
// console.log(user)
  useEffect(()=>{
    fetch(`http://localhost:3000/pet_product/${id}`,{
      headers:{
        authorization:`Bearer ${user.accessToken}`

      }
    })
.then(res=>res.json())
.then(data=>{
  setDetails(data.result)
  setLoading(false)
})
  },[])
  if(loading){
    return <Loading></Loading>
  }
    // const data = useLoaderData();
    // const details = data.result;
    // console.log(details)
        const {name,category,price,location,image,_id,description,email} = details;

    return (
        <div>
                    <title>PawMart - {name}</title>

         <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden mt-10 flex flex-col md:flex-row mb-20">
      
      <div className="md:w-1/2 bg-[#4e342e] flex justify-center items-center py-10">
        <img
          src={image}
          alt="Product"
          className="h-72 md:h-96 rounded-xl shadow-lg object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      
      <div className="md:w-1/2 p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Name: {name}
        </h2>
        <p className='text-gray-600'><span className='text-xl font-semibold'>Category:</span> {category}</p>
        <p className='text-gray-600'><span className='text-xl font-semibold'>Email:</span> {email}</p>
        <p className="text-yellow-600 font-medium mb-2"><span className='text-xl'>Rating:</span> ★ 4.4 | 421 Reviews</p>

        <p className="text-gray-600 mb-4 leading-relaxed">
         <span className='text-xl font-semibold'>Description:</span> {description}
        </p>

        <p className="text-gray-700 mb-4">
          <span className='text-xl font-semibold'>Location:</span> {location}
        </p>

        <p className='text-gray-600'><span className='text-xl font-semibold'>Price:</span> {price}</p>

        <Link to={`/update-products/${_id}`} className="w-full btn-primary text-white btn rounded-lg transition duration-300">
          Order Now
        </Link>

        
      </div>
    </div>
        </div>
    );
};

export default ProductDetails;
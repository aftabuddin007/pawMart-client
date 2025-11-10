import React, { useState } from 'react';

import PetCard from '../../Pages/PetCard/PetCard';
import { useLoaderData } from 'react-router';
import Loading from '../../Pages/Loading/Loading';

const PetProducts = () => {
    const data = useLoaderData();
    const [products,setProducts] = useState(data)
    const [loading,setLoading] = useState(false)
    const handleSearch = (e)=>{
        e.preventDefault()
        const searchText = e.target.search.value
        console.log(searchText)
       fetch(`http://localhost:3000/search?search=${searchText}`) 
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        setProducts(data)
        setLoading(false)
       })
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='max-w-7xl mx-auto '>
<h2 className='text-3xl font-bold text-center my-20'>Pet/Supplies</h2>

            <div className='flex justify-between gap-4 my-10 items-center'>

                <div></div>
                <div className=''>

 <form onSubmit={handleSearch} className='flex '>
    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input name='search' type="search" required placeholder="Search" />
</label>
<button className='btn rounded-lg'>Search</button>

 </form>
                </div>
                <div>
                    <fieldset className="fieldset">
  <select defaultValue="Pick a browser" className="select">
    <option disabled={true}>Pick a browser</option>
    <option>Chrome</option>
    <option>FireFox</option>
    <option>Safari</option>
  </select>
  
</fieldset>
                </div>
            </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 px-10 mb-20'>
        {
            products.map(product => <PetCard key={product._id} product={product}  ></PetCard>)
        }


        </div>
        </div>
    );
};

export default PetProducts;
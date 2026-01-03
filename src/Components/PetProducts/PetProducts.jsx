import React, { useEffect, useState } from 'react';

import PetCard from '../../Pages/PetCard/PetCard';
// import { useLoaderData } from 'react-router';
import Loading from '../../Pages/Loading/Loading';

const PetProducts = () => {
    // const data = useLoaderData();
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const [category,setCategory]=useState('All')
    const [sort, setSort] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

   const fetchProducts = (page = 1, sortType = sort) => {
    setLoading(true);

    fetch(`https://pawmart-server-one.vercel.app/pet_product?page=${page}&sort=${sortType}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
        setLoading(false);
      });
  };
    useEffect(() => {
    fetchProducts(1);
  }, []);

    const handleSearch = (e)=>{
        e.preventDefault()
        const searchText = e.target.search.value
        // console.log(searchText)\
        setLoading(true)
       fetch(`https://pawmart-server-one.vercel.app/search?search=${searchText}`) 
       .then(res=>res.json())
       .then(data=>{
        // console.log(data)
        // setProducts(data)
         setProducts(Array.isArray(data) ? data : data.products || []);
        setLoading(false)
       })
    }
    const handleFilter = (e)=>{
        e.preventDefault()
        const selected = e.target.value
        setCategory(selected)
        setLoading(true)

        const url = selected ==='All'?`https://pawmart-server-one.vercel.app/filterProduct`
        :`https://pawmart-server-one.vercel.app/filterProduct?category=${selected}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            // setProducts(data)
             setProducts(Array.isArray(data) ? data : data.products || []);
            setLoading(false)
        })
    }

    const handleSort = (e) => {
    const sortType = e.target.value;
    setSort(sortType);
    fetchProducts(1, sortType);
  };

  // 🔹 Pagination Click
  const handlePageChange = (page) => {
    fetchProducts(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='max-w-7xl mx-auto '>
                    <title>PawMart - Pet & Supplies</title>

<h2 className='text-3xl font-bold text-center my-10'>Pet/Supplies</h2>

            <div className='flex justify-between gap-4 my-10 items-center px-10'>

               
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
                    <fieldset className="fieldset flex gap-4">
  <select  onChange={handleFilter} value={category} className="select select-sm">
    <option value='All'>All Categories</option>
    <option value='Pets'>Pets</option>
    <option value='Pet Food'>Pet Food</option>
    <option value='Pet Care Product'>Pet Care Product</option>
    <option value='Accessories'>Accessories</option>
  </select>
   {/* Price Sort */}
  <select onChange={handleSort} className="select select-sm">
    <option value="">Price</option>
    <option value="low">Low to High</option>
    <option value="high">High to Low</option>
  </select>
</fieldset>
                </div>
            </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10 mb-20'>
        {
            products.map(product => <PetCard key={product._id} product={product}  ></PetCard>)
        }


        </div>
 {/* 📄 Pagination */}
      <div className="flex justify-center mt-12 mb-20">
        <div className="join">
          {[...Array(totalPages).keys()].map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page + 1)}
              className={`join-item btn btn-sm ${
                currentPage === page + 1 ? 'btn-active btn-primary' : ''
              }`}
            >
              {page + 1}
            </button>
          ))}
        </div>
</div>
        </div>
    );
};

export default PetProducts;
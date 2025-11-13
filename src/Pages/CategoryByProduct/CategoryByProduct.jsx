import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../Loading/Loading';
import PetCard from '../PetCard/PetCard';

const CategoryByProduct = () => {
const {name} = useParams();
const categoryName = decodeURIComponent(name)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
useEffect(()=>{
    setLoading(true)
    fetch(`https://pawmart-server-one.vercel.app/filterProduct?category=${categoryName}`)
    .then(res=>res.json())
    .then(data=>{
        setProducts(data)
        setLoading(false)
        
    })
    .catch(err=>{
        console.error(err);
        setLoading(false);
    })

},[])
if(loading){
    return <Loading></Loading>
}

    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold text-center my-10'>Category : {categoryName}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 mb-20'>
                {products.map(product=> <PetCard key={product._id}  product={product} ></PetCard>)}

            </div>
        </div>
    );
};

export default CategoryByProduct;
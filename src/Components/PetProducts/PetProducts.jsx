import React from 'react';

import PetCard from '../../Pages/PetCard/PetCard';
import { useLoaderData } from 'react-router';

const PetProducts = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold text-center my-20'>Pet/Supplies</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 px-10 mb-20'>
        {
            data.map(product => <PetCard key={product._id} product={product}  ></PetCard>)
        }


        </div>
        </div>
    );
};

export default PetProducts;
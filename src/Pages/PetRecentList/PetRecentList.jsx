// import React, { use } from 'react';
// import PetCard from '../PetCard/PetCard';
import PetCard from '../PetCard/PetCard';

const PetRecentList = ({recentPawPromise}) => {

    // console.log(recentPawPromise)

    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold text-center my-10'>Pet recent list</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 px-10 mb-20'>
                {recentPawPromise.map(product=> <PetCard key={product._id}  product={product} ></PetCard>)}

            </div>
            
        </div>
    );
};

export default PetRecentList;
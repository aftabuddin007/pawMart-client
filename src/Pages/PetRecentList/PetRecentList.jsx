// import React, { use } from 'react';
// import PetCard from '../PetCard/PetCard';
import { Link } from 'react-router';
import PetCard from '../PetCard/PetCard';

const PetRecentList = ({recentPawPromise}) => {

    // console.log(recentPawPromise)

    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <h2 className='text-3xl font-bold text-center mb-10'>Pets & Supplies recent List</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 mb-20'>
                {recentPawPromise.map(product=> <PetCard key={product._id}  product={product} ></PetCard>)}

            </div>
            <div className='text-center mt-7'><Link to='/pets-supplies' className=' btn btn-primary'>See More</Link>
</div>
        </div>
    );
};

export default PetRecentList;
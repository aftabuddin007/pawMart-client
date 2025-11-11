import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import PetExpert from '../PetExpert/PetExpert';
import PetCategory from '../PetCategory/PetCategory';
import PetRecentList from '../PetRecentList/PetRecentList';
import AdoptPet from '../AdoptPet/AdoptPet';
import { useLoaderData } from 'react-router';

const HomePage = () => {

const recentPawPromise = useLoaderData()
// console.log(recentPawPromise)



    return (
        <div>
                      <title>PawMart -Home</title>

            <HeroBanner></HeroBanner>
            <PetCategory></PetCategory>
            <PetRecentList recentPawPromise={recentPawPromise}></PetRecentList>
            <AdoptPet></AdoptPet>
            <PetExpert></PetExpert>
        </div>
    );
};

export default HomePage;
import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import PetExpert from '../PetExpert/PetExpert';
import PetCategory from '../PetCategory/PetCategory';
import PetRecentList from '../PetRecentList/PetRecentList';
import AdoptPet from '../AdoptPet/AdoptPet';
import { useLoaderData } from 'react-router';
import Community from '../Community/Community';
import FAQ from '../Faq/FAQ';
import HomeReview from '../../Components/ReviewCard';
import Brands from '../Brands/Brands';

const HomePage = () => {

const recentPawPromise = useLoaderData()
// console.log(recentPawPromise)



    return (
        <div>
                      <title>PawMart -Home</title>

            <HeroBanner></HeroBanner>
            <Brands></Brands>
            <PetCategory></PetCategory>
            <PetRecentList recentPawPromise={recentPawPromise}></PetRecentList>
            <AdoptPet></AdoptPet>
            <PetExpert></PetExpert>
            <HomeReview></HomeReview>
            <FAQ></FAQ>
            <Community></Community>
        </div>
    );
};

export default HomePage;
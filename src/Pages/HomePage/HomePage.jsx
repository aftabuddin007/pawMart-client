import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import PetExpert from '../PetExpert/PetExpert';
import PetCategory from '../PetCategory/PetCategory';
import PetRecentList from '../PetRecentList/PetRecentList';
import AdoptPet from '../AdoptPet/AdoptPet';

const HomePage = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <PetCategory></PetCategory>
            <PetRecentList></PetRecentList>
            <AdoptPet></AdoptPet>
            <PetExpert></PetExpert>
        </div>
    );
};

export default HomePage;
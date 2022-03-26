import React from 'react';
import LostPage from "./LostPage";
import FoundPage from "./FoundPage";
import ServicesPage from "./ServicesPage";
import FavoritesPage from "./FavoritesPage";
import ProfilePage from "./ProfilePage";
import ActivitiesPage from "./ActivitiesPage";

const HomePage = () => {
    return (
        <div>
            <LostPage/>
            <FoundPage/>
            <ServicesPage/>
            <FavoritesPage/>
            <ProfilePage/>
            <ActivitiesPage/>
            <button>Log out</button>
        </div>
    );
};

export default HomePage;
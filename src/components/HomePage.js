import React from 'react';
import LostPage from "./LostPage";
import FoundPage from "./FoundPage";
import ServicesPage from "./ServicesPage";
import FavoritesPage from "./FavoritesPage";
import ProfilePage from "./ProfilePage";
import ActivitiesPage from "./ActivitiesPage";
import HomeCSS from "../css_modules/home.module.css"

const HomePage = () => {
    return (
        <div>
            <div className={HomeCSS.topPanel}>
                <button>+ Add new</button>
            </div>
            <div className={HomeCSS.leftPanel}>
            <LostPage/>
            <FoundPage/>
            <ServicesPage/>
            <FavoritesPage/>
            <ProfilePage/>
            <ActivitiesPage/>
            <button>Log out</button>
            </div>
        </div>
    );
};

export default HomePage;
import React from 'react';
import {favoritesPage, foundPage, homePage, lostPage, profilePage, servicesPage} from "../utils/Constants";
import {Context} from "../utils/Context";

const Navigation = () => {
    return (
        <Context.Consumer>
            {value => (
            <nav>
                <ul>
                    <li className="btn btn-light btn-left" onClick={()=> window.location.hash=`#/${homePage}`}>Home</li>
                    <li onClick={()=> window.location.hash=`#/${lostPage}`}>Lost</li>
                    <li onClick={()=> window.location.hash=`#/${foundPage}`}>Found</li>
                    <li onClick={()=> window.location.hash=`#/${servicesPage}`}>Services</li>
                    <li onClick={()=> window.location.hash=`#/${favoritesPage}`}>Favorites</li>
                    <li onClick={()=> window.location.hash=`#/${profilePage}`}>Profile</li>
                </ul>
            </nav>
            )}
        </Context.Consumer>
    );
};

export default Navigation;
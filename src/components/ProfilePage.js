import React from 'react';
import ActivitiesPage from "./ActivitiesPage";

const ProfilePage = () => {
    return (
        <div>
            <label>Email</label>
            <input type='email' id="email" name="email" placeholder="Enter your email"/>
            <label>Phone number</label>
            <input type='number' id="number" name="number" placeholder="Enter your phone number"/>
            <label>Facebook link</label>
            <input type='url' id="urlFB" name="urlFB" placeholder="Enter your Facebook link"/>
            {/*maybe button?*/}
            <ActivitiesPage/>
        </div>
    );
};

export default ProfilePage;
import React from 'react';
import RegPage from "./RegPage";
//import {signinAction} from "../actions/registrAction";
import '../css_modules/intro.module.css'

const IntroPage = () => {
    return (
        <div>
            <div className={'introTop'}>
                <img className={'logo'}/>
                <button type={'button'} id={'signinBtn'} className="btn btn-outline-light">Sign in</button>
            </div>
               <div className={'topWhiteRec'}>
                   <h1>Welcome to your pawfessional community</h1>
                   <div className='btn-group-vertical'>
                       <button id={'lostBtn'} className='btn btn-primary'>I lost my pet</button>
                       <button id={'foundBtn'} className='btn btn-primary'>I found a pet</button>
                   <li className={'join'}>I'm okay, just want to JOIN the pawsome community!</li>
                   </div>
               </div>
            <div className={'introMiddle'}>
               <p> Our fluffy space for lovers, admirers, dads and moms of our four-legged, winged, tailed guys.</p>
            </div>
            <div className={'bottomWhiteRec'}>
                <h4>professional veterinarian tips;
                    useful information about education and care;
                    fostering home search;
                    information about pet-sitting and walking service;
                    and of course, great communication with
                    new friends in your social network!</h4>
            </div>
            <div className={'redRec'}>
                <h4>We are planing to open a new service, where your cats and dogs can find their love!</h4>
            </div>
            <div className={'bottomIntro'}>

            </div>
                <RegPage/>
        </div>
    );
};

export default IntroPage;
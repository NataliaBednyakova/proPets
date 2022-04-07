import React from 'react';
import RegCSS from "../css_modules/reg.module.css"

const RegPage = () => {
    return (
        <div className={RegCSS.back}>
            <div className={RegCSS.container}>
                <span className={RegCSS.logo}>ProPets</span>
                <span className={RegCSS.intro}><br/><span className={RegCSS.W}>Welcome!</span> Please sign in/sign up to continue or </span>
                <button className={RegCSS.facebook}>Enter with Facebook</button>
                <div className={RegCSS.main}>
                    <button className={RegCSS.upBtn}>Sign up</button>
                        <div className={RegCSS.upField}>
                            <label>Name:</label>
                            <input type="text"/>
                        </div>
                        <div className={RegCSS.upField}>
                            <label>Email:</label>
                            <input type="email"/>
                        </div>
                        <div className={RegCSS.upField}>
                            <label>Password:</label>
                            <input type="password"/>
                        </div>
                        <div className={RegCSS.upField}>
                            <label>Password:</label>
                            <input type="password"/>
                        </div>
                </div>
                <div className={RegCSS.main2}>
                    <button className={RegCSS.inBtn}>Sign in</button>
                       <div className={RegCSS.inFeild}>
                           <label>Email:</label>
                           <input type="email"/>
                       </div>
                        <div className={RegCSS.inFeild}>
                            <label>Password:</label>
                            <input type="password"/>
                        </div>
                </div>
                <hr/>
                <div className={RegCSS.bottomBtn}>
                    <button className={RegCSS.cancel}>Cancel</button>
                    <button className={RegCSS.submit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default RegPage;
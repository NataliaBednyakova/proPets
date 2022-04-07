import React, {Component} from 'react';
import IntroCSS from '../css_modules/intro.module.css'

class IntroPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className={IntroCSS.top}>
                    <img className={IntroCSS.logo} alt={""}/>
                    <button type={'button'} className={IntroCSS.btn1}>Sign in</button>
                </div>
                <div className={IntroCSS.topWhiteRec}>
                    <p>Welcome to your <span>pawfessional</span> community</p>
                    <img className={IntroCSS.doggo} alt={''}/>
                     {/*span = h1*/}
                    <div className='btn-group-vertical'>
                        <button className={IntroCSS.btn2}>I lost my pet!</button>
                        <button className={IntroCSS.btn3}>I found a pet!</button>
                        <li className={IntroCSS.join}>I'm okay, just want to <a className="btn btn-link" href={''}>JOIN</a> the pawsome community!</li>
                    </div>
                </div>
                <div className={IntroCSS.middle}>
                    <span className={IntroCSS.middlePhrase}> Our fluffy space for lovers, admirers, dads and moms of our four-legged, winged, tailed
                        guys.</span>
                    {/*span = p*/}
                </div>
                <div className={IntroCSS.bottomWhiteRec}>
                    <img className={IntroCSS.animals}/>
                    <span>Here is collected everything that your pet needs:</span>
                    <p>professional veterinarian tips;
                        useful information about education and care;
                        fostering home search;
                        information about pet-sitting and walking service;
                        and of course, great communication with
                        new friends in your social network!</p>
                </div>
                <div className={IntroCSS.redRec}>
                    <span>We are planing to open a new service, where your cats and dogs can find their love!</span>
                    <img className={IntroCSS.heart}/>
                </div>
                <div className={IntroCSS.bottom}>

                </div>
                {/*<RegPage/>*/}
            </div>
        );
    }
}


export default IntroPage;
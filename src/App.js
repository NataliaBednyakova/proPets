import './App.css';
import React, {Component} from "react";
// import {Context} from "./utils/Context";
 import IntroPage from "./components/IntroPage";
//import RegPage from "./components/RegPage";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    //
    // changeActivePage = page =>
    // {
    //     this.setState({activePage: page})
    // }

    render() {
        return(
            <div className={'container-fluid'}>
                {/*<Context.Provider value={{changePage: this.changeActivePage, page: this.state.activePage}}>*/}
                    <IntroPage/>
                {/*<RegPage/>*/}
                {/*</Context.Provider>*/}
            </div>
        )
    }

}

export default App;

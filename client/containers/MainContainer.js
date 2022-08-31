import React, { Component } from 'react';
// import { Component } from '../../../server/models/userModel';
import RepairContainer from './RepairsContainer';
import StatsContainer from './StatsContainer';


class MainContainer extends Component { 
    render() {
        return (
            <div id='mainContainer'>
            <RepairContainer />
            <StatsContainer />
        </div>
        )
    }


}


export default MainContainer;
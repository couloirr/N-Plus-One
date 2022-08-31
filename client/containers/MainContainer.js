import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import {getUser} from '../actions/userActions'
import RepairContainer from './RepairsContainer';
import StatsContainer from './StatsContainer';



class MainContainer extends Component { 
    // componentDidMount(){
    //     this.props.getUser()
    // }
    render() {
        const {user} = this.props
        // console.log(user.bikes)
        // if(!user.loading ) {
        //     const currentBike = user.user[0].bikes[0]
        //     console.log(currentBike)
        // }
        // console.log(currentBike)
        return (
            <div id='mainContainer'>
            <RepairContainer
            bike={this.props.currentBike}
             />
            <StatsContainer />
        </div>
        )
    }


}
const mapStateToProps = (state) => ({user:state.user})

// export default connect(mapStateToProps, {getUser})(MainContainer)
export default connect(mapStateToProps, null)(MainContainer)
import React, {Component} from "react";

class BikeStats extends Component{
    render() {
        return(
            <div className="stats">
                <h2>Bike Stats</h2>
                <span><h4>Total Miles:</h4></span>
                <span><h4>Total Elevation:</h4></span>
                <span><h4>Total Hours</h4></span>
            </div>
        )
    }

}

export default BikeStats;
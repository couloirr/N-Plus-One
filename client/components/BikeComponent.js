import React, {Component} from "react";

class BikeComponent extends Component{
    render() {
        return(
            <div className="component">
                <span><h4>percent:</h4></span>
                <span><h4>icon:</h4></span>
                <span><h4>name:</h4></span>
                <span><h4>hours remaining:</h4></span>
                <form>
                        
                        <button type='submit'>Edit</button>
                </form>
            </div>
        )
    }

}

export default BikeComponent;
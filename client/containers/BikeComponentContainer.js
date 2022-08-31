import React, {Component} from "react";
import BikeComponent from "../components/BikeComponent";

class BikeComponentContainer extends Component{
    render() {
        return(
            <div><h4>Components Container</h4>
            <div className="container" id="comp-container">
                <BikeComponent />
                <BikeComponent />
                <BikeComponent />
                <BikeComponent />
                <form>
                        <input />
                        <button type='submit'>Add Component</button>
             
                </form>
                </div>
            </div>
        )
    }

}

export default BikeComponentContainer;
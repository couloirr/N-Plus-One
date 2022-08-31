import React, {Component} from "react";
import BikeComponent from "../components/BikeComponent";

const BikeComponentContainer = ({components})=> {
    const compArr = [];
    // console.log(components)
    if(components.length > 0){
        components.forEach((element, i) => {
            compArr.push(
                <BikeComponent
                key={i}
                part={element}
                 />
            );
        });
    }
    
        return(
            
            <div className="container" id="comp-container">
               {compArr}
                <form>
                        <div>
                        <input />
                        <button type='submit'></button>
                        </div>
             
                </form>
                
            </div>
        )
    

}

export default BikeComponentContainer;
import React, {Component} from "react";
import MainContainer from "./containers/Maincontainer";
// import { render } from "react-dom";


class App extends Component {
    render(){
        return(
            <div className="App">
                <h2>App Component Loaded</h2>
                <MainContainer />
           
            </div>
        )
    }
}

// const App = () => {
//     <div id="App">
//         < MainContainer />
//     </div>
// }

export default App;
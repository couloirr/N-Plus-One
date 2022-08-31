import React, {Component} from "react";
import MainContainer from "./containers/MainContainer";
// import { render } from "react-dom";


class App extends Component {
    render(){
        return(
            <div className="App">
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
import React from "react";
import Header from "./Header"
import Body from "./Body"
function App() {
    return <div>
        <Header/>
        <Body>
        <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
        </Body>
    </div>
}

export default App;
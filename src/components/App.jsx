import React from "react";
import Header from "./Header"
import Body from "./Body"
import Login from "./Login"
var isLoggedIn = true;

function App() {
    const [loggedIn, switchState] = React.useState(true);
    function loggy(){
        switchState(!loggedIn);
    }
    return <div>{
        !loggedIn? <div><Login/><button onClick={loggy}/> </div>: (<div>
    <Header/>     
<Body/><button onClick={loggy}/></div>)}
</div>;
}

export default App;
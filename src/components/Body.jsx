import React from "react";
const customStyle ={
    padding: "5.5 2 2"
}
const shadstyle= `
1px 2px 2px hsl(220deg 60% 50% / 0.333),
2px 4px 4px hsl(220deg 60% 50% / 0.333),
3px 6px 6px hsl(220deg 60% 50% / 0.333)`
const boxshadow={

    "box-shadow": shadstyle,

}
function Body(){
    return <div className="bd-cheatsheet container-fluid bg-body" style={customStyle}>
        <section id="content">
<div className="card card-body" style={boxshadow}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
              </section>
    </div>
}

export default Body;
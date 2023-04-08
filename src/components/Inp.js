import React from "react";
import ReactDOM  from "react-dom";

export default  function(){
    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"/>
                <input type="text" placeholder="Bottom text" className="form--input"/>
                <button className="form--btn">Get a new meme image 🖼</button>
            </div>
        </main>
    )
}
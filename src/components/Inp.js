import React from "react";
import ReactDOM  from "react-dom";
import ranmeme from "../memesData"



export default  function(){
    
    const [MemeImg, setMemeImg] = React.useState("")

    function randommeme(){
        const rannum = (Math.floor(Math.random()*ranmeme.data.memes.length))
        setMemeImg(ranmeme.data.memes[rannum].url)
    }

    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"/>
                <input type="text" placeholder="Bottom text" className="form--input"/>
                <button className="form--btn" onClick={randommeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme--img-div">
                <img src={MemeImg} className="meme--img"/>    
            </div>
        </main>
    )
}
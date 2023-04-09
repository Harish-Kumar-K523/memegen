import React from "react";
import ReactDOM  from "react-dom";
import ranmeme from "../memesData"



export default  function(){
    
    const [MemeImg, setMemeImg] = React.useState({
        topText:"",
        bottomText:"",
        ranimg:""
    })

    function randommeme(){
        const memeArray = ranmeme.data.memes
        const rannum = (Math.floor(Math.random()*memeArray.length))
        let murl = ranmeme.data.memes[rannum].url
        setMemeImg(prevImg => ({
            ...prevImg,
            ranimg: murl
        }))
    }

    function handleinput(event){
        const { name, value } = event.target
        setMemeImg(prevval => ({
            ...prevval,
            [name]: value
        }))
    }
    
    return(
        <main>
            <div className="form">
                <input name="topText" type="text" placeholder="Top text" className="form--input" onChange={handleinput}/>
                <input name="bottomText" type="text" placeholder="Bottom text" className="form--input" onChange={handleinput}/>
                <button className="form--btn" onClick={randommeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme--img-div">
                <img src={MemeImg.ranimg} className="meme--img"/>  
                <h2 className="meme--text top">{MemeImg.topText}</h2>
                <h2 className="meme--text bottom">{MemeImg.bottomText}</h2>  
            </div>
        </main>
    )
}
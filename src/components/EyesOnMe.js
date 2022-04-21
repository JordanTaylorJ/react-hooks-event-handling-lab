// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function good() {
        return console.log("Good!");
    }
    function notGood(){
        return console.log('Hey! Eyes on me!');
    }
    return(
        <button onFocus={good} onBlur={notGood}>Eyes on me</button>
    )
}

export default EyesOnMe; 
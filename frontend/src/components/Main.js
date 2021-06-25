import { Divider } from "@material-ui/core";
import React from "react";
import "./Main.css";
import image from "./img2.png";

function Main(){
    return(
        <div className="mainarea">
            <div className="text" >
                <h1>Market your business</h1>
                <h2>Send emails to your clients, on monthly/weekly/daily basis. See your business grow with us!</h2>
            </div>
        <img className="img" src={image}/>
        </div>
    )
}

export default Main;
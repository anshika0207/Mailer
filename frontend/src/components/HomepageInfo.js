import axios from './axios'
import React, {Component}  from 'react'
import { useState,useEffect } from "react";


function HomepageInfo({maildetails}){ 

const array = [1,2,3];

function callItem(e){
    return <p> {e.company}</p>
}
        return (
            <div>
                <p>
                {maildetails.map(callItem)}
                </p>
            </div>
        )
}

export default HomepageInfo;

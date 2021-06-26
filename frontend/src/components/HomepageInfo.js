import axios from './axios'
import React, {Component}  from 'react'
import { useState,useEffect } from "react";


function HomepageInfo({maildetails}){ 

const array = [1,2,3];

function  callItem(e){
    return <p> {e.emails}</p>
}
        return (
            <div>
                {/* {maildetails.emails.map((mail,i)=>{
                    <div>

                        <li key={i}>{mail.company}</li>
                        <p>{mail.company}</p>
                    </div>
                })} */}

                <p>
                {maildetails.map(arr=>{
                    <p>{arr.company}</p>
                })}
                {maildetails.map(callItem)}
                </p>
                
            </div>
        )
}

export default HomepageInfo

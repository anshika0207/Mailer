import React from "react";
import Table from "./Table";
import './History.css'
import Navbar from "./Navbar";

var userIsRegistered = true;

function callItems(entry){
    return(<Table detail={entry}/>)
}

function History({sentdetails}){
    console.log({sentdetails});
    return(
        <div>
        <Navbar registeration={userIsRegistered} />
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Company Name</th>
                <th scope="col">Status Response</th>
                <th scope="col">Subscription</th>
                </tr>
            </thead>
            <tbody>

            {sentdetails.map(callItems)};
            {/* {sentDetails.find({},function(err, details){
                if(err){
                    console.log(err);
                }
                else{
                    details.forEach(function(detail){
                        
                    })
                }
            })} */}
            </tbody>
        </table>
        </div>
    )
}



export default History;
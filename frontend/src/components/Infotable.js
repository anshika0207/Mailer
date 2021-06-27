import React from "react";

function Infotable({detail}){
    function callEmail(event){
        return <li>{event}</li>;
    }
    return(
        <tr>
            <td>{detail.company}</td>
            <td>{detail.emails.map(callEmail)}</td>
            <td>{detail.plan}</td>
        </tr>
    )
}

export default Infotable;
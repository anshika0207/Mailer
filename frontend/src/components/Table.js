import React from "react";

function Table({detail}){
    return(
        <tr>
            <td>{detail.name}</td>
            <td>{detail.status}</td>
            <td>{detail.subscription}</td>
        </tr>
    )
}

export default Table;
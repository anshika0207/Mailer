import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App(){
    return <Form IsRegistered={userIsRegistered} />
}

export default App;
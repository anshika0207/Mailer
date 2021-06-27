import axios from "./axios";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import './HomepageInfo.css'
import ReactTable from "react-table";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Info from "./Infotable";


var userIsRegistered = true;

function HomepageInfo({ maildetails }) {

  function callItem(e){
    return <Info detail = {e}/>
  }

  return(
    <div>
    <Navbar registeration={userIsRegistered} />

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Company</th>
      <th scope="col">Registered Emails</th>
      <th scope="col">Plan</th>
    </tr>
  </thead>
  <tbody>
    {maildetails.map(callItem)};
  </tbody>
</table>

    <Footer />
    </div>

  )

  // function callItem(e) {

  //   return (
  //     <div className="email__person">
  //       <h3>{e.company}</h3>
  //       <p> {e.emails.map(callEmail)}</p>
  //     </div>
  //   );
  // }
  // return <div></div>;
}

export default HomepageInfo;

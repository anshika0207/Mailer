import axios from "./axios";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import './HomepageInfo.css'

function HomepageInfo({ maildetails }) {
  const array = [1, 2, 3];

  function callItem(e) {
    function callEmail(event) {
      return <li>{event}</li>;
    }
    return (
      <div className="email__person">
        <h2>{e.company}</h2>
        <p> {e.emails.map(callEmail)}</p>
      </div>
    );
  }
  return <div>{maildetails.map(callItem)}</div>;
}

export default HomepageInfo;
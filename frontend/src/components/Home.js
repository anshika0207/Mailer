import React, { useState } from "react";
import Navbar from "./Navbar";
import './Home.css';
import axios from "./axios";
var userIsRegistered=true;

function Home(){

  const [Company, setCompany] = useState("");
  const [Emails, setEmails] = useState("");
  const [Subject, setSubject] = useState("");
  const [Mailbody, setMailbody] = useState("");
  const [plan, setplan] = useState("");
  
  const [disable, setDisable] = React.useState(false);

  function onclickBtn(event){
    return setplan(event.target.name);
}

  const onSubmitForm = (e)=>{
    e.preventDefault();
    console.log(Company);
    console.log(Emails);
    console.log(Mailbody);


    // if(Reccuring){
    //   plan = Reccuring;
    // }
    // else if(Monthly){
    //   plan = Monthly;
    // }
    // else if(Weekly){
    //   plan = Weekly;
    // }
    // else if(Yearly){
    //   plan = Yearly;
    // }

    let emails = Emails.split('\n');
    axios.post('/submitForm',{
      company:Company,
      emails:emails,
      plan:plan,
      subject:Subject,
      mailbody:Mailbody 
    })

    setCompany("");
    setEmails("");
    setMailbody("");
    setSubject("");
  }

    return(
    <div class="home">
    <Navbar registeration = {userIsRegistered}/>
    <div class = "container">
        <div class="py-5 text-center home container">
        <h2>Sub Form</h2>
        <p class="lead">Fill in then details below to help us send your clients regular emails!</p>
        </div>


      <div class="col-md-7 col-lg">
        <h4 class="mb-3">Details</h4>
        <form class="needs-validation" onSubmit={onSubmitForm}>  
          <div class="row g">
            <div class="col-sm">
              <label for="firstName" class="form-label">Company Name</label>
              <input type="text" class="form-control" id="firstName" onChange={(e)=>setCompany(e.target.value)} required/>
              <div class="invalid-feedback">
                Valid company name is required.
              </div>
            </div>

            <div class="col-sm">
              <label for="firstName" class="form-label">Subject</label>
              <input type="text" class="form-control" id="firstName" onChange={(e)=>setSubject(e.target.value)} required/>
              <div class="invalid-feedback">
                Valid company name is required.
              </div>
            </div>
            <div class="col-12">
              <label for="username" class="form-label">Body <span class="text-muted">Content of the email.</span></label>
              <input type="text" class="form-control" id="firstName" onChange={(e)=>setMailbody(e.target.value)} required/>
            </div>

            {/* <div class="col-12 ">
              <label for="username" class="form-label">Body<span class="text-muted">Body of the email.</span></label>
              <div class="input-group">
              <div class="form-group shadow-textarea col-lg">
                <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" onChange={(e)=>setMailbody(e.target.value)}></textarea>
                </div>
              </div>
            </div> */}

            <div class="col-12 ">
              <label for="username" class="form-label">Users <span class="text-muted">Enter user email address, with each on new line.</span>  </label>
              <div class="input-group">
              <div class="form-group shadow-textarea col-lg">
                <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" placeholder="Enter emails here.." onChange={(e)=>setEmails(e.target.value)}></textarea>
                </div>
              </div>
            </div>


        </div>
          <hr class="my-4"/>

        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">Plans made just for you!</h1>
            <p class="fs-5 text-muted">Choose the duration in which you want users to receive emails.</p>

    <div class="row row-cols-1 row-cols-md-4 mb-4 text-center">
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Recurring</h4>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                    <li>sent to the recipient after every 20 or 30 second every day</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-outline-primary"  disabled={disable} name="recurring" onClick={(e)=>{onclickBtn(e); setDisable(true); }}>Choose</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm ">
                <div class="card-header py-3 ">
                    <h4 class="my-0 fw-normal">Weekly</h4>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                    <li>sent to the recipient on any particular day and time of every week</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-outline-primary"  disabled={disable} name="weekly" onClick={(e)=>{onclickBtn(e); setDisable(true); }}>Choose</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm ">
                <div class="card-header py-3 ">
                    <h4 class="my-0 fw-normal">Monthly</h4>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                    <li>sent to the recipient on any particular date and time of every month</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-outline-primary"  disabled={disable} name="monthly" onClick={(e)=>{onclickBtn(e); setDisable(true); }}>Choose</button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm ">
                <div class="card-header py-3 ">
                    <h4 class="my-0 fw-normal">Yearly</h4>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                    <li>sent to the recipient on any particular date and time every year</li>
                    </ul>
                    <button type="button" class="w-100 btn btn-lg btn-outline-primary"  disabled={disable} name="yearly" onClick={(e)=>{onclickBtn(e); setDisable(true); }}>Choose</button>
                </div>
                </div>
            </div>
      </div>
      </div>

          <hr class="my-4"/>

          <button class="w-100 btn btn-outline-primary btn-lg" type="submit">Submit</button>
        </form>
      </div>
      </div>
    </div>
    )
}

export default Home;

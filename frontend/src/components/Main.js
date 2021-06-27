import { Divider } from "@material-ui/core";
import React from "react";
import "./Main.css";
import image from "./img2.png";
import { Button, Card } from 'react-bootstrap';
import image_card from './img_card.gif'
import image_history from './newhis.gif'
import future_img from './future_img.gif'
import { useHistory } from "react-router-dom";


function Main(){
    const history = useHistory();


    const onHome = (e)=>{
        e.preventDefault();
        onHomePage();
    }
    const onHistory = (e)=>{
        e.preventDefault();
        onHistoryPage();
    }
    const onScheduleclick = (e)=>{
        e.preventDefault();
        onSchedule();
    }
    const onHomePage = () =>{ 
      let path = `/gotohome`; 
      history.push(path);
    }
    const onHistoryPage = () =>{ 
        let path = `/home`; 
        history.push(path);
      }
      const onSchedule = () =>{ 
        let path = `/home`; 
        history.push(path);
      }

    
    return(
        <div>

        <div className="mainarea">
            <div className="text" >
                <h1>Market your business</h1>
                <br/>
                <br/>
                <h3>Send emails to your clients, on monthly/weekly/daily basis. See your business grow with us!</h3>
            </div>
        <img className="img" src={image}/>    
        </div>

<div className="belowMain">
<Card className="card" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image_card} style={{size:'100px180'}} />
  <Card.Body>
    <Card.Title>Home page</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" class="btn btn-outline-primary" onClick={onHome}>Check Here</Button>
  </Card.Body>
</Card> 
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={future_img} style={{size:'100px180'}} />
  <Card.Body>
    <Card.Title>Schedule your mails</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" class="btn btn-outline-primary" onClick={onScheduleclick}>Check Here</Button>
  </Card.Body>
</Card> 
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image_history} style={{size:'100px180'}} />
  <Card.Body>
    <Card.Title>History</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" class="btn btn-outline-primary" onClick={onHistory}>Check Here</Button>
  </Card.Body>
</Card>  
</div>
<div className="footer">
<p>© 2021-2022 girlGeeks, Inc. · Privacy · Terms</p>
</div> 
        </div>
    )
}

export default Main;
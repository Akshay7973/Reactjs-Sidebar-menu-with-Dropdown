import React from 'react';
import './Home.css';
import image1 from '../Assets/data.png';
import image2 from '../Assets/piechart.jpg';
import image3 from '../Assets/linechart.jpg';
import image4 from '../Assets/map.jpg';
import { Progress } from 'reactstrap';

function Dashboard() {
  return (
    <div  className="col-sm-9" style={{marginLeft:"250px"}} >
    <div className="well">
      <h1>Admin Dashboard</h1>
      <p>Loading ...</p>
    </div>

    <div className="row m-0">
        <div className="col-sm-3">
          <div className="well">
          <i style={{fontSize:"36px"}} className="fa fa-money" ></i>
            <p>1 Million</p> 
          </div>
        </div>
        <div className="col-sm-3">
          <div className="well">
          <i style={{fontSize:"36px"}} className="fa fa-bar-chart"></i>
            <p>10 Million</p> 
          </div>
        </div>
        <div className="col-sm-3">
          <div className="well">
          <i style={{fontSize:"36px"}} className="fa fa-lastfm-square" ></i>
            <p>100 Million</p> 
          </div>
        </div>
        <div className="col-sm-3">
          <div className="well">
          <i style={{fontSize:"36px"}} className="fa fa-line-chart"></i>
            <p>1 Trillion</p> 
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="well">
          <img src={image1}  d-block width="100%" alt="logo1"  /> 
            <p>Daily Update</p> 
           
          </div>
        </div>
        <div className="col-sm-4">
          <div className="well">
          <img src={image2}  d-block width="100%" alt="logo1"  />  
          <p>Weekly Sell</p> 
            
          </div>
        </div>
        <div className="col-sm-4">
          <div className="well">
          <img src={image3}  d-block width="100%" alt="logo1"  />  
          <p>Yearly Profit</p> 
            
          </div>
        </div>
        <div className="container">
    <div className="row m-0" style={{margin:"0 -16px"}}  >
      <div className="col-lg-5 col-12 m-0">
        <h3>Regions</h3>
        <img src={image4}  d-block width="100%" alt="logo1"  />  
      </div>
      <div className="col-lg-7 col-12 m-0">
        <h5>Feeds</h5>
        <table className="w3-table w3-striped w3-white">
          <tr>
            <td><i className="fa fa-user w3-blue w3-padding-tiny"></i></td>
            <td>New record, over 90 views.</td>
            <td><i>10 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-bell w3-red w3-padding-tiny"></i></td>
            <td>Database error.</td>
            <td><i>15 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-users w3-orange w3-text-white w3-padding-tiny"></i></td>
            <td>New record, over 40 users.</td>
            <td><i>17 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-comment w3-red w3-padding-tiny"></i></td>
            <td>New comments.</td>
            <td><i>25 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-bookmark w3-light-blue w3-padding-tiny"></i></td>
            <td>Check transactions.</td>
            <td><i>28 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-laptop w3-red w3-padding-tiny"></i></td>
            <td>CPU overload.</td>
            <td><i>35 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-share-alt w3-green w3-padding-tiny"></i></td>
            <td>New shares.</td>
            <td><i>39 mins</i></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <div className="w3-container" style={{margin:"0px 16px"}}>
    <h4>General Stats</h4>
    <p>New Visitors</p>
    <div className="w3-progress-container w3-grey">
    <Progress striped color="success" value="25">25%</Progress>
    </div>

    <p>New Users</p>
    <div className="w3-progress-container w3-grey">
    <Progress striped color="warning" value="50">50%</Progress>
    </div>

    <p>Bounce Rate</p>
    <div className="w3-progress-container w3-grey">
    <Progress striped color="danger" value="75">75%</Progress>
    </div>
  </div>

  <br></br>
  <div className="container" style={{marginTop:"25px"}}>
    <div className="row m-0">
      <div className="col-lg-4 col-12 m-0">
        <h5 className="w3-bottombar w3-border-green">Demographic</h5>
        <p>Language</p>
        <p>Country</p>
        <p>City</p>
      </div>
      <div className="col-lg-4 col-12 m-0">
        <h5 className="w3-bottombar w3-border-red">System</h5>
        <p>Browser</p>
        <p>OS</p>
        <p>More</p>
      </div>
      <div className="col-lg-4 col-12 m-0">
        <h5 className="bottombar border-red">Target</h5>
        <p>Users</p>
        <p>Active</p>
        <p>Geo</p>
        <p>Interests</p>
      </div>
    </div>
  </div>
<br></br>
      </div>
      </div>
  );
}

export default Dashboard;


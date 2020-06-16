import React from 'react'
import lawn1 from '../images/lawn1.jpg'
import lawn2 from '../images/lawn2.jpg'
import mn from '../images/mn.jpg'
import {Link} from 'react-router-dom';
export default function   Serve() {
    return (
        <div class="card-deck">
  <div class="card">
    <img src={lawn1} class="card-img-top" alt="..."></img>
    <div class="card-body">
     
 
      <p class="card-text" style={{color:"blue",fontSize:"10",marginTop:"15px"}}>Lawn Planting and Maintanance</p>
      <Link to="/Services">
      <div className="btn btn-success "  >Learn More</div>
      </Link>
    </div>
  </div>
  <div class="card">
    <img src={lawn2} class="card-img-top" alt="..."></img>
    <div class="card-body">
      
     
      <p class="card-text" style={{color:"blue",fontSize:"10",marginTop:"15px"}}>Garden Maintanance</p>
      <Link to="/Services">
      <div className="btn btn-success">Learn More</div>
      </Link>
    </div>
  </div>
  <div class="card">
    <img src={mn} class="card-img-top" alt="..."></img>
    <div class="card-body">
     
      <br></br>
      <p class="card-text" style={{color:"blue",fontSize:"10"}}>Tree and shrub Planting </p>
      <Link to="/Services">
      <div className="btn btn-success">Learn More</div>
      </Link>
    </div>
  </div>
</div>
    )
}

import React from 'react'

import { MDBInput } from "mdbreact"
import "./part3.css";
function Part3() {
  return (
      <div>
     <div class="container ">
         <div class="row  first justify-content-md-center  ">
        <div class="col-md-2">
          <h3><strong>Contact</strong></h3>
         <h5>WRITE TO US</h5>
      </div>
      </div>
      <div class="row justify-content-md-center">
      <div class="col-md-4">
      <MDBInput className='f' label="Your Name" />
      </div>
      <div class="col-md-4">
      <MDBInput className='f' type="email" label="Your Email"/>
      </div>
      </div>
      <div class="row justify-content-md-center">
      <div class="col-md-8">
    <MDBInput className='f' label="Phone" />
</div>
</div>
      <div class="row justify-content-md-center">
      <div class="col-md-8">
 <MDBInput type="textarea" className='f' label="Message" rows="5" />
</div>
</div> 
<div class="row justify-content-md-center">
      <div class="col-md-2">

<button type="button" className="bt">SEND MESSAGE</button>
</div>
</div>
 </div>
      </div>

   
  

  )
}

  
export default Part3
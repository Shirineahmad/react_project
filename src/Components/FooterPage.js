import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css"
const FooterPage = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4 co">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
           <h5  className="doc">CONTACT</h5>
           <h5 className="doc">
           FAQ </h5> 
           <h5 className="doc">PRIVACY POLICE</h5><h5 className="doc" >SITEMAP</h5>
           
          </MDBCol>
          <MDBCol md="4">
           <img  className="img9" src="https://www.mcdonalds.com.lb/images/logo.svg"/>
          </MDBCol>
          <MDBCol md="4">
            <p className="change">Call to us<br/><bold className="doc">
            70/001155<br/></bold></p>
           <p className="change"> 1245, Hamra,Beirut<br/></p>
           <p className="doc"> support@hotmail.com
            </p>


          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <MDBRow>
        <MDBCol md="4"><img id="mac" src="https://www.mcdonalds.com.lb/images/logo.svg"/>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com">McDonald’s. All Rights Reserved. </a>
        
          </MDBCol>
         < MDBCol md="4">
        
          </MDBCol>
          <MDBCol md="4"><span className="te">Follow Us</span>
          <span class="icon-twitter-sign"></span>
          <span class="icon-facebook-sign"></span>
          <span class="icon-instagram"></span>
          

          </MDBCol>
          </MDBRow>
          </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
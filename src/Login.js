

import React, { useState } from 'react'
import "./Components/Login.css"


const Results = () => (
    <div id="results" className="search-results ">
  
              <div class="form-group">
                  <input type="email" class="form-control item" id="email" placeholder="Email" required/>
              </div>
           
              <div class="form-group">
                  <input type="date" class="form-control item " id="birth-date" placeholder="Birth Date" required/>
              </div>
          
    </div>
  )

const Login = () => {
    const [showResults, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(!showResults);
  
    return (
        <div  >
        <form >
        <div><button type="button" class="close" data-dismiss="modal">&times;</button></div>
            <div class="form-icon  u--swing swing hvr-float-shadow  text-flicker-in-glow">
            <img src="https://www.mcdonalds.com.lb/images/logo.svg"  width="50px" height="50px"	 className='c' alt="..." /> 
              
            </div>
            <div class="form-group ">
                <input type="text" className="form-control item " id="username" placeholder="Username" required/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control item" id="password" placeholder="Password" required/>
            </div>
            <div class="form-group">
               
            </div>
            { showResults && <div > <Results /></div>}
            
       
            
            <div class="form-group">
                <button type="submit" class="btn btn-block create-account  ">{showResults ? "SIGN UP" : "LOGIN" }</button>
            </div>
            <div class="form-group">
            <button type="button" class="btn bz"  onClick={onClick}>{showResults ? "LOGIN" : "SIGNUP" }</button> 
     
      
  </div>
            <div style={{"text-align":"center"}}>
            <h5  className=' text hvr-float-shadow'>Sign up with social media</h5>
            <div class="social-icons">
                <a href="https://r.search.yahoo.com/_ylt=A2KIbMdGolpicl8A37VXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZANMT0NVSTAzN18xBHNlYwNzYw--/RV=2/RE=1650135751/RO=10/RU=https%3a%2f%2fmobile.mail.yahoo.com%2fapps%2faffiliateRouter%3fbrandUrl%3dhttps%253A%252F%252Fwww.facebook.com%252F%26appName%3dYahooSearchDesktop%26partner%3d1%26locale%3d1%26buckets%3dGO001%2cLOCUI037%2cSA035%2cPALFECTRL%2cKVCOMGDTC%2cTDMOVIES001%2cTRNLANDING000%2cTNBE009%26fr%3dmcafee/RK=2/RS=mzNlYsxkqVsgBfXeqxTGlVaPrV8-" className='box hvr-float-shadow'><i class="icon-social-facebook " title="Facebook"></i></a>
                <a href="https://r.search.yahoo.com/_ylt=AwrJ7JhoolpieqwA4VJXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZANMT0NVSTAzN18xBHNlYwNzYw--/RV=2/RE=1650135784/RO=10/RU=https%3a%2f%2fwww.google.com/RK=2/RS=Hc8WwSdkhTY1LOZFR1uIolYoVjo-" className='box hvr-float-shadow'><i class="icon-social-google" title="Google"></i></a>
                <a href="https://r.search.yahoo.com/_ylt=A0geKI30oVpiGjYAC4JXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZANMT0NVSTAzN18xBHNlYwNzYw--/RV=2/RE=1650135669/RO=10/RU=https%3a%2f%2fwww.twitter.com/RK=2/RS=rZHS_RWtFU0_ayYFFz.ScvmcELg-" className='box hvr-float-shadow'><i className="icon-social-twitter " title="Twitter"></i></a>
            </div>
            </div>
        </form>
        
        
    </div>
    )
}

export default Login
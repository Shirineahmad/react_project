import React from 'react'
import "./part2.css"

function Part2() {
  return (
    <div class="container b" style={{backgroundImage: `url("https://mcdonalds.com.lb/storage/website-sections/August2019/kmFR0vM2mM71TRbcvPkG.jpg")` 
		
	}}>
   
   <div class="row   f">
	   
					<div class="col-md-6 col-sm-5"></div>
			
						<div class=" col-md-6  col-sm-7 resp">
						<h3 class="bold " style={{"color":"white"}}>Amazing deals every day!</h3>
                                <div class="rich-textbox-wrapper ">
                                   
                                    <h5    style={{"color":"white"}}>Download the McDonald's App for irresistible daily offers!</h5>
                                    
                                </div>
								<a  className= "resp" href="https://apps.apple.com/us/app/mcdonalds/id922103212" target="_blank">
							<img class="mr-3" src="https://www.mcdonalds.com.lb/public/images/download-app-store-white.svg"/>
						</a>
						<a  className= "resp" href="https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp&amp;hl=en" target="_blank">
							<img  class="mr-3" src="https://www.mcdonalds.com.lb/public/images/download-google-play-white.svg"/>
						</a>
                           
						
					</div>
				</div>
</div>
   
  )
}

export default Part2
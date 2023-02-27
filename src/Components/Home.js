
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Home.css";


SwiperCore.use([EffectCoverflow, Pagination]);

const SliderData = [
    {
      image:
        'https://mcdonalds.com.lb/storage/home-slides/October2019/e48Y9CqbQUWv8gEsNk5L.png',
        text:
        'The Legendary Big Mac',
        text1:'Two 100% Halal beef patties, special sauce, lettuce,',
        text2:'Two 100% Halal beef patties, special sauce, lettuce,',
        hre:'https://mcdelivery.mcdonalds.com.lb/lb/ ',
        
        but:'Order Now'
        
        
    },
    {
      image:
        '	https://mcdonalds.com.lb/storage/home-slides/October2019/MAv8cw736jvEOIv7JWVr.png',
        text:'Application Mac',
       
        hre:'https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp&hl=en',
        but:'Download The App',
        key:'2'},
    {
      image:
        'https://mcdonalds.com.lb/storage/home-boxes/October2019/BONDmvd0Jf0Sfi1U8DdL.jpg',
        text:
        'Promotions',
        text1:'See which promotions are available and discover more',
        text2:'our exclusive offers on the McDonald’s App.',
        hre:'https://www.mcdonalds.com.lb/en/promotions',
        
        but:'Visit Promotions'
    },
    {
      image:
        'https://mcdonalds.com.lb/storage/home-boxes/September2020/sp5JDhw0NId5YsP6s0XT.jpg',
        text:'Birthday Party!',
        text1:'Celebrate with ‘The Happy Party Packages’',
        hre:'https://www.mcdonalds.com.lb/en/birthday',
     but:'Book Now'
    },
 ];

function Home() {
 
  
   
    return (
        <div className='home--' >


            <div class="swiper" >
            <Swiper
           
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
           
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        className="mySwiper"
      >
          
        {SliderData.map((slide, index) => {
          
            
            
              return(
                  
            <SwiperSlide 
           
             > 
         
             
                <img src={slide.image} alt='travel' className='image' />
                {index === 3 ?<div className='row'>
                <div className='col=md-6 col-sm-5'></div>
                 
                <div className= {index===3?'col-md-6 col-sm-7  textleft':'col-md-6 col-sm-7 content'}> 
                    <h1  className='title' style={{"font-weight":"bold"}}>{slide.text}</h1>
                    <div class="rich-textbox-wrapper">
                   <p><strong>{slide.text1}</strong></p>
                                      <p><strong>{slide.text2}</strong></p>
                       
                    </div>
                    <a href={slide.hre} target="_blank" >
                        <button class="btn6 mt-3 ">
                            <small style={{"font-weight":"bold" }}>{slide.but}</small>
                        </button>
                    </a>
                </div>
                </div>
              
  
                :
                  <div className='row'>
                  <div className='col=md-6 col-sm-5'></div>
                <div className= {index===2?'col-md-6 col-sm-7  textright':'col-md-6 col-sm-7 content'}> 
                    <h1  className='title' style={{"font-weight":"bold"}}>{slide.text}</h1>
                    <div class="rich-textbox-wrapper">
                    <h5>&nbsp;</h5>
                   
                    <p><strong>{slide.text1}</strong></p>
                                      <p><strong>{slide.text2}</strong></p>
                       
                    </div>
                    <a href={slide.hre}target="_blank" >
                        <button class="btn6 mt-3 ">
                            <small style={{"font-weight":"bold" }}>{slide.but}</small>
                        </button>
                    </a>
                </div>
                </div>}
             </SwiperSlide>
)        })}
      
      </Swiper>
    
               
            </div>

            <div class="container-fluid"   >
                <div class="col-12 col-md-12 col-lg-12">
                    <h1 ><strong class="row justify-content-center" style={{"font-weight":"bold"}}>Our advantages</strong></h1>
                </div>
                <div class="col-12 col-md-12 col-lg-12  first">
                    <h1 class='row justify-content-center' style={{"color":"red","font-weight":"bold"}}>Have a snack &nbsp;</h1>
                </div>
                <div className="row justify-content-center ">

                    <div class="col-12 col-md-4 col-lg-3 col-xl-2 card">
                        <div className="card-wrapper">
                            <div className="card-box ">
                                <span className="icon-globe"></span>

                            </div>
                            <h4 className="card-title  mbr-black mbr-fonts-style display-7 t">
                                <p style={{"font-weight":"bold"}}>Fast Delivery&nbsp;</p>
                            </h4>

                        </div>

                    </div>

                    <div className="col-12 col-md-4 col-lg-3 col-xl-2 card">
                        <div className="card-wrapper">
                            <div className="card-box align-center">
                                <span className="icon-star"></span>

                            </div>
                            <h4 className="card-title  mbr-black mbr-fonts-style display-7">
                                <p style={{"font-weight":"bold"}}>High Quality</p>
                            </h4>
                        </div>

                    </div>
                    <div className="col-12 col-md-4 col-lg-3 col-xl-2 card">
                        <div className="card-wrapper">
                            <div className="card-box align-center">
                                <span className="icon-fire"></span>

                            </div>
                            <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                <p style={{"font-weight":"bold"}}>Low Price</p>
                            </h4>
                        </div>

                    </div>


                </div>
            </div>


        </div >
    )
}

export default Home
import React, { useState } from 'react'

import "./section2.css"
import PostData from "./data.json";







function Section2() {
  let [category, setCategory] = useState("");

  const [sortType, setSortType] = useState("")
  const [selectedItem, setSelectedItem] = useState({})














  return (


    <div class="container section" >



      <div className="container" >
        <div className='multibtn'>
          <button className='btn1' onClick={() => { setSortType(""); setCategory("") }}>Default sorting</button>
          <button className='btn2' onClick={() => { setSortType("lowToHigh") }}>Price: low to high</button>
          <button className='btn3' onClick={() => { setSortType("highToLow") }}>Price: high to low</button>
        </div>
      </div>

      <div className='container'>

        <div class="row">

          <div className='col-md-9'>

            <div className='row'>



              {sortType == ""

                ? PostData.filter(postDetail => category != "" ? postDetail.category === category : true).map((postDetail, index) => {
                  return <div className='col-md-4'><button onClick={() => { setSelectedItem(postDetail); }} className='each' data-toggle="modal" data-target="#modal"><img src={postDetail.image} width="100px" height="100px" /></button>
                    <p> {postDetail.itemName}</p><p> {postDetail.price}$</p></div>

                }) : sortType == "lowToHigh" ? PostData.sort((a, b) => (a.price > b.price) ? 1 : -1).filter(postDetail => category != "" ? postDetail.category === category : true).map((postDetail, index) => {
                  return <div className='col-md-4'><button onClick={() => { setSelectedItem(postDetail); }} className='each' data-toggle="modal" data-target="#modal"><img src={postDetail.image} width="100px" height="100px" /></button>
                    <p> {postDetail.itemName}</p><p> {postDetail.price}$</p></div>

                })
                  : PostData.sort((a, b) => (a.price < b.price) ? 1 : -1).filter(postDetail => category != "" ? postDetail.category === category : true).map((postDetail, index) => {
                    return <div className='col-md-4'><button   onClick={() => { setSelectedItem(postDetail); }} className='each' data-toggle="modal" data-target="#modal"><img src={postDetail.image} width="100px" height="100px" /></button>
                      <p> {postDetail.itemName}</p><p> {postDetail.price}$</p></div>

                  })}
              <div class="modal registration-form  u--slideDown slideDown" id="modal">
              
                <div class="modal-body">
                
                  <div className='row'>
                    <div className='col-md-6'>
                      <img src={selectedItem.image}  width="200px" height="200px" />
                    </div>
                    <div className='col-md-6'>
                      <h2 style={{"font-weight":"bold"}}>{selectedItem.itemName}</h2>
                      <h4 style={{"font-weight":"bold"}}>{selectedItem.price}$</h4><hr style={{"color":"grey","height":"3px"}} />
                      <p>LOREM IPSUM DOLOR
                        SIT AMET CONSECT
                        ETUER ADIPISCING ELIT

                      </p>
                      <div><button className='buy' >Buy Now</button></div>
                      <div><button type="button" class="close" style={{"font-weight":"bold","font-size":"xx-large"}} data-dismiss="modal">Close</button></div>
                    </div>
                  </div>

                  

                </div>
              </div>

            </div>

          </div>
          <div className='col-md-3'>
            {/* <div class="row price"><div className='col-md-12'><h5 class="col-md-5">4</h5><h5 class="col-md-5">20</h5> </div><input type="range" id="volume" name="volume"
              min="0" max="11" /></div> */}

            <div class="row range">
              <div className='col-md-12 '>
                <p style={{ "font-weight": "bold", "padding-top": "10px", "font-size": "x-large" }}>Filter</p>
                <hr />
                <div>
                  <button className="dd" onClick={() => setCategory("Beef")}><img src="https://mcdonalds.com.lb/storage/menu-products/Big-Mac.png" width="50px" height="50px" /><span>Beef</span></button>
                  <button className="dd" onClick={() => setCategory("Chicken")}><img src="https://mcdonalds.com.lb/storage/menu-products/Chicken-Mac.png" width="50px" height="50px" /><span>Chicken</span></button>
                  <button className="dd" onClick={() => setCategory("Sides")}><img src="https://mcdonalds.com.lb/storage/menu-products/Fries-Regular.png" width="50px" height="50px" /><span>Side</span></button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


  );

}

export default Section2;
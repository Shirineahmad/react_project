
import Section2 from"./Components/Section2";
import Home from './Components/Home';
import { Element } from 'react-scroll';
import { Component } from "react";
import Checklist from "./Components/Checklist";
import Part2 from "./Components/Part2";
import Part3 from "./Components/Part3";
import FooterPage from "./Components/FooterPage";

class MainPage extends Component {



    constructor() {
  
      super();
  
      this.state = {
  
  
  
      }
  
    }
  
  
  
    backToTop = () => {
  
      alert(1)
  
    }
  
  
  
  
    render() {
  
      return (
  
        <div> <Element name="home" className="element" >
            <Home/>
          </Element>
          <Element name="section2" className="element2" >
            <Section2/>
          </Element>
          <Element name="checklist" className="element3" >
            <Checklist/>
          </Element>
         
          <Element name="part3" className="element5" >
           <Part3/>
          </Element>
          <Element name="part2" className="element4" >
           <Part2/>
          </Element>
          <Element name="footer" className="element6" >
           <FooterPage/>
          </Element>

          </div>
          )

}



}



export default MainPage

import { Link } from 'react-scroll'
import Login from '../Login'
import './Login.css'
import "./Navbar.css"





function Navbar() {



  return (
    <div>

      <header className='header--'>


        <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark  header--nav">
          <div class="container">

            <img className="navbar-brand img1" src="https://www.mcdonalds.com.lb/images/logo.svg" />

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" >
              <span class="navbar-toggler-icon"></span>
            </button>
         
            <div class="collapse navbar-collapse" id="main_nav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item"><Link className="logo home" to="home" spy={true} smooth={true} duration={500}> Home </Link> </li>
                <li class="nav-item">
                  <Link className="logo home" to="section2" spy={true} smooth={true} duration={500}>Shop</Link>
                </li>
                <li class="nav-item">
                  <Link className="logo home" to="checklist" spy={true} smooth={true} duration={500}>Checklist</Link>
                </li>
                <button class="item2" data-toggle="modal" data-target="#myModal">
                  Login
                </button>

              </ul>

              <div class="modal registration-form  u--slideDown slideDown" id="myModal">
                <div class="modal-body">
                  <Login />
                </div>






              </div>

            </div>
          </div>

        </nav>

      </header>


    </div>

  )
}

export default Navbar;
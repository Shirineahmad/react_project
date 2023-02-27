
import { BrowserRouter as Router,Routes,Route,
} from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar';


import MainPage from './MainPage';


function App() {
 
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <div>
          <Routes>
            <Route exact path='/'  element={<MainPage/>} />
        
            {/* <Route  path="/login" element={<Login/>}/> */}
           
            </Routes>
         
        </div>
      </div>
    </Router>
  );
}

export default App;

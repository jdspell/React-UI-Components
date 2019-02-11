import React from 'react';
import './App.css';

//custom dependencies
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImgThumbnail from './components/HeaderComponents/ImageThumbnail';


const App = () => {
  return (
    <div className="App">
      <div className="Heading">
        <ImgThumbnail/>
        <HeaderContainer/>
      </div>

      <div className="Card">
      
      </div>
    </div>
  );
};


export default App;

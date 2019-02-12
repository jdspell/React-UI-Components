import React from 'react';
import './App.css';

//custom header dependencies
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImgThumbnail from './components/HeaderComponents/ImageThumbnail';

//custom card dependencies
import CardContainer from './components/CardComponents/CardContainer';



const App = () => {
  return (
    <div className="App">
      <div className="heading">
        <ImgThumbnail/>
        <HeaderContainer/>
      </div>

      <CardContainer/>
    </div>
  );
};


export default App;

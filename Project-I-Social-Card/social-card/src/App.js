import React from 'react';
import './App.css';

//custom header dependencies
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImgThumbnail from './components/HeaderComponents/ImageThumbnail';
import Footer from './components/FooterComponents/Footer';

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
      <Footer/>
    </div>
  );
};


export default App;

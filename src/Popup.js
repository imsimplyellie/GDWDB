import React from 'react';
import "./Popup.css";

class Popup extends React.Component {  
    render() {  
  return (  
  <div className='popup'>  
  <div className='popup\_inner'>  
  <h1>{this.props.text}</h1>  
  <button onClick={this.props.closePopup}>THIS IS KID FRIENDLY!!</button>  testy testy
  </div>  
  </div>  
  );  
  }  
  }  

export default Popup;
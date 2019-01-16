import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './home/home.jsx'

const App = (props) => (
  <div>
    <Header/>
    <div className="body">
    {props.main}
    </div>
    <Footer/>
  </div>
);

export default App;

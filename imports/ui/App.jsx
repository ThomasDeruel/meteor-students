import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './form/form.jsx'

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

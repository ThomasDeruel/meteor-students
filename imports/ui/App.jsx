import React from 'react';
import Form from './form/form.jsx'

const App = (props) => (
  <div>
    <h2>Header !</h2>
    {props.main}
    <h2>Footer</h2>
  </div>
);

export default App;

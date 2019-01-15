import React from 'react';
import Form from './form/form.jsx'

const App = (props) => (
  <div>
    <h1>Welcome to Meteor!</h1>
    {props.main}
  </div>
);

export default App;

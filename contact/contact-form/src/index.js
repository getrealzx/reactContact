import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Contacts from "./components/Contacts";



ReactDOM.render(
  <BrowserRouter>
    {/* <BaseLayout> */}
      <Switch>
        {/* <Route exact path="/" component={App} /> */}
        <Route exact path="/" component={Contacts} />

      </Switch>
    {/* </BaseLayout> */}
  </BrowserRouter>
  
  
  ,
  document.getElementById('root')
);



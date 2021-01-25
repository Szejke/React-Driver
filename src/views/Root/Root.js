import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home/Home';

function Root() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;

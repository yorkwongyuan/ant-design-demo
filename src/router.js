import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import List from './routes/List';
import Menu from './routes/Menu';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" component = {Products} exact/>
        <Route path="/list" component = {List} exact/>
        <Route path="/menu" component = {Menu} exact/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;

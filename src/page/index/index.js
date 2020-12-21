import React from 'react';
// 路由
// import { Tab, Message, Input, Button } from '@alifd/next';
// import { useHistory, BrowserRouter as Router, Route, } from 'react-router-dom';
import Hook from '../hook'
import { useHistory, BrowserRouter as Router, Route, } from 'react-router-dom';
import './index.scss';

function Index () {
  
  return (
    <div>
      <Router history={useHistory}>
        <Route path="/" component={Hook} />
      </Router >
    </div>
  )
}

export default Index;

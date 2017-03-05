import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {Main} from './app/main';
import {Projects} from './app/components/projects/projects';
import {Drawings} from './app/components/drawings/drawings';
import {About} from './app/components/about/about';
import {Cv} from './app/components/cv/cv';
import {Contact} from './app/components/contact/contact';
import {DrawingDesk} from './app/components/projects/drawing-desk';

import '../node_modules/flexboxgrid/css/flexboxgrid.min.css';
import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Projects}/>
      <Route path="projects" component={Projects}/>
      <Route path="drawing-desk" component={DrawingDesk}/>
      <Route path="drawings" component={Drawings}/>
      <Route path="about" component={About}/>
      <Route path="cv" component={Cv}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>,
  document.getElementById('root')
);

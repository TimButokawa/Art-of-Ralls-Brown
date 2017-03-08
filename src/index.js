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
import {DrawingPod} from './app/components/projects/drawing-pod';
import {SoundSystem} from './app/components/projects/sound-system';
import {MagicalMistakes} from './app/components/projects/magical-mistakes';
import {Breath} from './app/components/projects/breath';
import {PatternOne} from './app/components/projects/pattern-one';
import {PatternTwo} from './app/components/projects/pattern-two';

import '../node_modules/flexboxgrid/css/flexboxgrid.min.css';
import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Projects}/>
      <Route path="projects" component={Projects}/>
      <Route path="drawing-desk" component={DrawingDesk}/>
      <Route path="drawing-pod" component={DrawingPod}/>
      <Route path="sound-system" component={SoundSystem}/>
      <Route path="magical-mistakes" component={MagicalMistakes}/>
      <Route path="breath" component={Breath}/>
      <Route path="pattern001" component={PatternOne}/>
      <Route path="pattern002" component={PatternTwo}/>
      <Route path="drawings" component={Drawings}/>
      <Route path="about" component={About}/>
      <Route path="cv" component={Cv}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>,
  document.getElementById('root')
);

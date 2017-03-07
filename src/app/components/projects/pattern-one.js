import React, {Component} from 'react';
import {ProjectContainer} from './project-container';
import {ProjectDescription} from './project-description';
import axios from 'axios';

const bullets = [
  {
    point: 'Year',
    description: '2012'
  },
  {
    point: 'Medium',
    description: 'Digital Print and Gouache, Screen Print on Panel, Electronics'
  }
];
const description = [
  'A suite of 16 panels with audio electronics mounted behind them utilizing the combination and interaction of different methods of logic and rules based systems. These concepts of logic and systems are drawn from various sources such as complex modern financial structures, primitive fractals, experimental sound processing/sequencing and compression algorithms used indigital media. The combination of these various structures plays with ideas found in the cognitive sciences that have long interested me, pattern seeking and phenomenology especially.',
  <p key={1}>Taking components from these various forms of logic and playing with them is both my attempt to investigate what components of these structures interests me and to allow space for them to transform, interfere and re-inform one another through their translation into components of drawings and sound pieces.</p>
];

export class PatternOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    axios
      .get('app/components/projects/pattern-images.json')
      .then(response => {
        const data = response.data;
        this.setState({
          images: data[0]
        });
      });
  }

  render() {
    return (
      <ProjectContainer title="drawing desk">
        <audio className="full-width room-bottom" controls>
          <source src="app/assets/audio/pattern001.mp3" type="audio/mpeg"/>
        </audio>
        <ProjectDescription bullets={bullets} description={description}/>
      </ProjectContainer>
    );
  }
}

import React, {Component} from 'react';
import {ProjectContainer} from './project-container';
import {ProjectDescription} from './project-description';

const styles = {
  margin: {
    marginBottom: '1em'
  }
};
const bullets = [
  {
    point: 'Year',
    description: '2013'
  },
  {
    point: 'Medium',
    description: 'screen printed cassette covers'
  },
  {
    point: 'Musical Group',
    description: <a href="http://magicalmistakes.com/">Magical Mistakes</a>
  },
  {
    point: 'Music Label',
    description: <a href="http://killquanti.com/">Kill Quaniti</a>
  }
];
const description = 'A seven layer screen print and design commissioned by San Diego based record label Kill Quanti for Osaka based musician Magical Mistakes. Hand printed edition of 200 with metallic and glow in the dark ink.';

export class MagicalMistakes extends Component {
  render() {
    return (
      <ProjectContainer title="magical mistakes">
        <img style={styles.margin} src="app/assets/images/magical-mistakes/magical-1.jpg"/>
        <ProjectDescription bullets={bullets} description={description}/>
        <img style={styles.margin} src="app/assets/images/magical-mistakes/magical-2.jpg"/>
        <img style={styles.margin} src="app/assets/images/magical-mistakes/magical-3.jpg"/>
        <img style={styles.margin} src="app/assets/images/magical-mistakes/magical-4.jpg"/>
        <img src="app/assets/images/magical-mistakes/magical-5.jpg"/>
      </ProjectContainer>
    );
  }
}

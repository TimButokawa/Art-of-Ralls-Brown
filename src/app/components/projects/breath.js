import React, {Component} from 'react';
import {ProjectContainer} from './project-container';
import {ProjectDescription} from './project-description';
import {IFrameWrapper} from '../../utils/iframe-wrapper';

const styles = {
  margin: {
    marginBottom: '1em'
  },
  fullWidth: {
    width: '100%'
  }
};
const bullets = [
  {
    point: 'Contributing Artists',
    description: 'Rob Brown, Patrick Faulk'
  },
  {
    point: 'Year',
    description: '2013'
  },
  {
    point: 'Medium',
    description: 'plywood, steel, electronics and software'
  }
];
const description = [
  <p className="flush-top" key={0}>“I relish the brief yet eternal moment, the point at which life unravels and I catch a glimpse of what was always present; like waking from a dream, or the blinking moment I occupy the space between words.</p>,
  <p key={1}>It is the air of eternity much longed for, though presently untouched.</p>,
  <p key={2}>Listening to breaths is just as relevant as the words they space. What would be considered the removal of content, then generates new content, and perhaps an honest expression of sound. With this piece a device is actively listening to several streaming talk radio programs. Using filters and decibel thresholds, the device records up to 30 seconds of non-speech. As the viewer sits a sensor is activated, whereupon sound is released into the space. Once the clip has played, it is deleted from the buffer and a new audio file regenerates in the empty space.</p>,
  <p key={3}>I wanted a representation of what is heard, though potentially not listened to; a memorial to those sounds which pass unnoticed.”</p>,
  <cite key={4}>-Patrick Faulk</cite>
];

export class Breath extends Component {
  render() {
    return (
      <ProjectContainer title="drawing desk">
        <img style={styles.margin} src="app/assets/images/breath/breath-1.jpg"/>
        <ProjectDescription bullets={bullets} description={description}/>
        <IFrameWrapper>
          <iframe src="//www.youtube.com/embed/oU5S5YttxYw?rel=0&amp;modestbranding=1&amp;showinfo=0&amp;controls=0&amp;vq=large" frameBorder="0" allowFullScreen/>
        </IFrameWrapper>
        <img src="app/assets/images/breath/breath-2.jpg"/>
      </ProjectContainer>
    );
  }
}

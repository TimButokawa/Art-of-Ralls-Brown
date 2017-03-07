import React, {Component} from 'react';
import {ProjectContainer} from './project-container';
import {ProjectDescription} from './project-description';
import {ProjectDiptych} from './project-diptych';

const bullets = [
  {
    point: 'Year',
    description: '2013'
  },
  {
    point: 'Medium',
    description: 'plywood, electronics, software'
  }
];
const description = ['Duophonic drawing pod is partnership with ', <a key={1} href="http://www.asitespace.com">Site Space</a>, ' mobile residency. It is a 12′ long camping trailer that has been repurposed into a mobile project space, creating an immersive multi-sensory experience that is controlled and manipulated through simple means of drawing and mark-making. In recording, altering and playing back the sounds the participants create through drawing or writing. They are put into an altered relationship with something that they are so accustomed to hearing that they usually tune it out.', ' Once the sound has been foregrounded and their experience of it has shifted, something that was previously tangential and ephemeral is given a new significance. With this new aural awareness, they begin to make marks with the focus on how those marks produce different sounds and the way they made those marks changed the characteristics of the resultant sounds along with the visual components.'];
const diptych = {
  top: ['app/assets/images/drawing-pod/pod-1.jpg', 'app/assets/images/drawing-pod/pod-2.jpg'],
  middle: ['app/assets/images/drawing-pod/pod-3.jpg', 'app/assets/images/drawing-pod/pod-4.jpg']
};

export class DrawingPod extends Component {
  render() {
    return (
      <ProjectContainer title="douphonic drawing pod">
        <ProjectDiptych images={diptych.top}/>
        <ProjectDescription bullets={bullets} description={description}/>
        <ProjectDiptych images={diptych.middle}/>
        <img className="img-responsive" src="app/assets/images/drawing-pod/pod-5.jpg"/>
      </ProjectContainer>
    );
  }
}

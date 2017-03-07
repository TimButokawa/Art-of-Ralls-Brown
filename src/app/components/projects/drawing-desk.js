import React, {Component} from 'react';
import {ProjectContainer} from './project-container';
import {ProjectDescription} from './project-description';

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
const description = 'Plywood drafting table styled desk with a piece of drawing paper and a pencil on the surface. The inside of the desk houses a contact microphone (placed under the drawing paper), a laptop computer running audio processing software and a pair of sound isolating headphones. The system records, alters and plays back the sounds the participants create through drawing or writing.';

export class DrawingDesk extends Component {
  render() {
    return (
      <ProjectContainer title="drawing desk">
        <img className="room-bottom img-responsive" src="app/assets/images/drawing-desk/drawing-desk-4.jpg"/>
        <audio className="full-width room-bottom" controls>
          <source src="app/assets/audio/drawing-desk.mp3" type="audio/mpeg"/>
        </audio>
        <ProjectDescription bullets={bullets} description={description}/>
        <img className="room-bottom img-responsive" src="app/assets/images/drawing-desk/drawing-desk-1.jpg"/>
        <img className="room-bottom img-responsive" src="app/assets/images/drawing-desk/drawing-desk-2.jpg"/>
        <img className="room-bottom img-responsive" src="app/assets/images/drawing-desk/drawing-desk-3.jpg"/>
        <img className="img-responsive" src="app/assets/images/drawing-desk/drawing-desk-4.jpg"/>
      </ProjectContainer>
    );
  }
}

import React, {Component} from 'react';
import {ProjectContainer} from './project-container';
import {ProjectDescription} from './project-description';
import {IFrameWrapper} from '../../utils/iframe-wrapper';

const bullets = [
  {
    point: 'Year',
    description: '2013'
  },
  {
    point: 'Medium',
    description: '4 channel video and sound'
  }
];
const description = 'A four channel audio video projection created with an analog modular audio/video synthesizer. This piece is a navigation through the space between synthetically generated audio and video, feeding each back into the other to create “structures” that are constantly on the edge of destabilization and chaos.';

export class SoundSystem extends Component {
  render() {
    return (
      <ProjectContainer title="sound/system">
        <IFrameWrapper>
          <iframe src="https://player.vimeo.com/video/124731474" frameBorder="0" allowFullScreen/>
        </IFrameWrapper>
        <ProjectDescription bullets={bullets} description={description}/>
      </ProjectContainer>
    );
  }
}

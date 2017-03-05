import React, {Component} from 'react';

export class ProjectDiptych extends Component {
  render() {
    return (
      <div className="row room-bottom sm-room-none">
        {this.props.images.map((image, i) => (
          <div key={i} className="col-sm-6 col-xs-12 sm-room-bottom">
            <img src={image}/>
          </div>
        ))}
      </div>
    );
  }
}

ProjectDiptych.propTypes = {
  images: React.PropTypes.arrayOf(propValue => {
    if (propValue.length !== 2) {
      return new Error(
        'Invalid prop: 2 images are required for this component!'
      );
    }
  }).isRequired
};

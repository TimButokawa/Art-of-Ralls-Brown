import React, {Component} from 'react';
import {Link} from 'react-router';

export class Project extends Component {
  render() {
    return (
      <Link to={this.props.project.link}>
        <img className="img-responsive tile-image" src={this.props.project.image}/>
        <span className="tile-title">{this.props.project.title}</span>
      </Link>
    );
  }
}

Project.propTypes = {
  project: React.PropTypes.object.isRequired
};

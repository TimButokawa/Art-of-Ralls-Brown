import React, {Component} from 'react';

const margin = {marginBottom: '1em'};

export class ProjectContainer extends Component {
  render() {
    return (
      <div>
        <h2 style={margin}>{this.props.title}</h2>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ProjectContainer.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
};

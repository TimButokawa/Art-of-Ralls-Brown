import React, {Component} from 'react';

const styles = {
  bold: {
    fontWeight: 'bold'
  }
};

export class ProjectDescription extends Component {
  render() {
    return (
      <div className="row room-bottom">
        <div className="col-xs-12 col-sm-4 sm-room-bottom">
          <div>
            <ul>
              <li><span style={styles.bold}>Year:</span> {this.props.year}</li>
              <li><span style={styles.bold}>Medium:</span> {this.props.medium}</li>
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-8">
          <div>{this.props.description}</div>
        </div>
      </div>
    );
  }
}

ProjectDescription.propTypes = {
  year: React.PropTypes.string.isRequired,
  medium: React.PropTypes.string.isRequired,
  description: React.PropTypes.oneOfType([
    React.PropTypes.array.isRequired,
    React.PropTypes.string.isRequired
  ])
};

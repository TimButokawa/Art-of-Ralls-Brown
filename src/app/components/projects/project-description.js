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
              {this.props.bullets.map((bullet, i) => (
                <li key={i}><span style={styles.bold}>{bullet.point}:</span> {bullet.description}</li>
              ))}
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
  bullets: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  description: React.PropTypes.oneOfType([
    React.PropTypes.array.isRequired,
    React.PropTypes.string.isRequired
  ])
};

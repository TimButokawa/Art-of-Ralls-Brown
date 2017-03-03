import React, {Component} from 'react';

const styles = {
  tech: {
    maxWidth: '300px',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem 1rem 0 0',
    padding: '1rem'
  },
  logo: {
    width: '5rem',
    height: '5rem',
    float: 'right',
    margin: '0 0 .5rem .5rem'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0'
  }
};

export class Tech extends Component {
  render() {
    return (
      <div style={styles.tech}>
        <img style={styles.logo} src={this.props.tech.logo}/>
        <h3 style={styles.h3}>
          {this.props.tech.title}
        </h3>
        <p>{this.props.tech.text1}</p>
        <p>{this.props.tech.text2}</p>
      </div>
    );
  }
}

Tech.propTypes = {
  tech: React.PropTypes.object.isRequired
};

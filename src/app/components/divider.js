import React, {Component} from 'react';

const border = {
  width: '100%',
  borderBottom: '2px solid #4d4d4d'
};

export class Divider extends Component {
  render() {
    return (
      <div style={border}/>
    );
  }
}

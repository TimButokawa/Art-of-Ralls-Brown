import React, {Component} from 'react';
import {Nav} from './nav';

const styles = {
  header: {
    backgroundColor: '#fefefe',
    margin: '1rem',
    position: 'relative'
  },
  title: {
    fontWeight: 500,
    margin: 0
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>rob brown</h1>
          <Nav/>
        </div>
      </header>
    );
  }
}

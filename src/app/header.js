import React, {Component} from 'react';
import {Nav} from './nav';

const styles = {
  header: {
    margin: '1rem',
    position: 'relative'
  },
  title: {
    fontWeight: 500,
    margin: 0
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

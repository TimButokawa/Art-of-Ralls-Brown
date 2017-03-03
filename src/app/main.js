import React, {Component} from 'react';
import {Header} from './header';
import {Divider} from './components/divider';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <Divider/>
        <main style={styles.main}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.node
};

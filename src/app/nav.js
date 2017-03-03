import React, {Component} from 'react';
import {Link} from 'react-router';

const mobileMenu = {
  position: 'absolute',
  top: '.25rem',
  right: '0',
  cursor: 'pointer',
  fontSize: '2rem'
};

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      mobileMenuIsOpen: false
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState({
      mobileMenuIsOpen: !this.state.mobileMenuIsOpen
    });
  }

  render() {
    return (
      <nav>
        <ul className={(this.state.mobileMenuIsOpen ? 'open' : 'closed') + ' nav-list'}>
          <li className="nav-list-item">
            <Link activeClassName="nav-list-item-active" to="/projects">projects</Link>
          </li>
          <li className="nav-list-item">
            <Link activeClassName="nav-list-item-active" to="/drawings">drawings</Link>
          </li>
          <li className="nav-list-item">
            <a href="http://rawblades.tumblr.com/" target="_blank" rel="noopener noreferrer">blog</a>
          </li>
          <li className="nav-list-item">
            <Link activeClassName="nav-list-item-active" to="/about">about</Link>
          </li>
          <li className="nav-list-item">
            <Link activeClassName="nav-list-item-active" to="/cv">cv</Link>
          </li>
          <li className="nav-list-item">
            <Link activeClassName="nav-list-item-active" to="/contact">contact</Link>
          </li>
        </ul>
        <i style={mobileMenu} className="material-icons hidden-sml" onClick={this.handleToggleMenu}>menu</i>
      </nav>
    );
  }
}

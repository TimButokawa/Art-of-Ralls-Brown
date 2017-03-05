import React, {Component} from 'react';

export class IFrameWrapper extends Component {
  render() {
    return (
      <div className="iframe-wrapper room-bottom">
        {this.props.children}
      </div>
    );
  }
}

IFrameWrapper.propTypes = {
  children: React.PropTypes.node
};

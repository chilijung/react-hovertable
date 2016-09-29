import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

@Radium
export default class Table extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.node
  };

  render() {
    const {
      width,
      height
    } = this.props;

    const style = {
      width: width,
      height: height,
      boxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      WebkitBoxSizing: 'border-box'
    };

    return (
      <div style={[style]}>
        {this.props.children}
      </div>
    );
  }
}

import React, {Component, PropTypes} from 'react';
import Radium from 'radium';
import THEME from './styles';

@Radium
export default class Dimensions extends Component {
  constructor(props) {
    super(props);

    this.setTranslate = this.setTranslate.bind(this);

    this.state = {
      show: false,
      x: 0,
      y: 0,
      data: {
        rowNumber: 0,
        columnNumber: 0
      }
    };
  }

  static propTypes = {
    theme: PropTypes.string
  };

  hideDimensions() {
    this.setState({show: false});
  }

  setTranslate(x, y, data) {
    this.setState({
      show: true,
      x, y, data
    });
  }

  render() {
    const {
      show,
      x,
      y,
      data
    } = this.state;

    const dimensionStyle = THEME[this.props.theme].dimensions;
    const position = {
      left: x,
      top: y
    };

    return show ? <div style={[dimensionStyle, position]}>
      {data.columnNumber + 1}
      <span style={{padding: '0 3px'}}>x</span>
      {data.rowNumber + 1}
    </div> : null;
  }
}

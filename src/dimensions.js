import React, {Component} from 'react';

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
        cellNumber: 0
      }
    };
  }

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

    const style = {
      background: '#F0F0F0',
      color: '#444',
      fontWeight: 'bold',
      textAlign: 'center',
      position: 'absolute',
      display: 'inline-block',
      padding: '5px',
      left: x,
      top: y,
      zIndex: 1000
    };

    return show ? <div style={style}>
      {data.cellNumber + 1} x {data.rowNumber + 1}
    </div> : null;
  }
}

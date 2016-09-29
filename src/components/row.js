import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

import Cell from './cell';

@Radium
export default class Row extends Component {
  static propTypes = {
    rowHeight: PropTypes.number.isRequired,
    rowNumber: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    onMouseOver: PropTypes.func.isRequired,
    onMouseOut: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const {
      rowHeight,
      column
    } = this.props;

    const style = {
      width: '100%',
      height: rowHeight,
      boxSizing: 'inherit',
      MozBoxSizing: 'inherit',
      WebkitBoxSizing: 'inherit'
    };

    const columnArr = [].constructor.apply(this, new Array(column));

    return (
      <div style={[style]}>
        {
          columnArr.map((val, i) => <Cell
              {...this.props}
              key={i}
              cellNumber={i}
            />
          )
        }
      </div>
    );
  }
}

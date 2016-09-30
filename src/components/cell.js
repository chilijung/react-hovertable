import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

@Radium
export default class Cell extends Component {
  static propTypes = {
    rowHeight: PropTypes.number.isRequired,
    rowNumber: PropTypes.number.isRequired,
    cellNumber: PropTypes.number.isRequired,
    activeRow: PropTypes.number,
    activeCell: PropTypes.number,
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
      rowNumber,
      activeCell,
      activeRow,
      cellNumber,
      width,
      column,
      onMouseOver,
      onMouseOut,
      onClick
    } = this.props;

    const cellHeight = width / column;
    let cellStyle;

    const outerStyle = {
      width: cellHeight,
      height: rowHeight,
      padding: '1px',
      boxSizing: 'inherit',
      MozBoxSizing: 'inherit',
      WebkitBoxSizing: 'inherit',
      cursor: 'pointer',
      display: 'inline-block'
    };

    const style = {
      default: {
        width: '100%',
        height: '100%',
        border: '1px solid #aaa'
      },
      active: {
        backgroundColor: '#aaa'
      },
      selected: {
        backgroundColor: '#eee'
      }
    };

    if (rowNumber === activeRow && cellNumber === activeCell) {
      cellStyle = [style.default, style.selected];
    } else if (rowNumber <= activeRow && cellNumber <= activeCell) {
      cellStyle = [style.default, style.active];
    } else {
      cellStyle = [style.default];
    }

    return (
      <div
        style={outerStyle}
        onMouseOver={e =>
          onMouseOver(e, {rowNumber, cellNumber, rowHeight, cellHeight})}
        onMouseOut={onMouseOut}
        onClick={e =>
          onClick(e, {rowNumber, cellNumber, rowHeight, cellHeight})}
        >
        <div style={cellStyle}/>
      </div>
    );
  }
}

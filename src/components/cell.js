import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

@Radium
export default class Cell extends Component {
  static propTypes = {
    rowHeight: PropTypes.number.isRequired,
    rowNumber: PropTypes.number.isRequired,
    columnNumber: PropTypes.number.isRequired,
    activeRow: PropTypes.number,
    activeCell: PropTypes.number,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    onMouseOver: PropTypes.func.isRequired,
    onMouseOut: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    selectedRow: PropTypes.number,
    selectedColumn: PropTypes.number
  };

  render() {
    const {
      rowHeight,
      rowNumber,
      activeCell,
      activeRow,
      selectedRow,
      selectedColumn,
      columnNumber,
      width,
      column,
      onMouseOver,
      onMouseOut,
      onClick
    } = this.props;

    const cellWidth = width / column;
    let cellStyle = [];

    const outerStyle = {
      width: cellWidth,
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
      mouseOver: {
        backgroundColor: '#eee'
      },
      selected: {
        border: '2px solid #EEE'
      }
    };

    if (rowNumber === activeRow && columnNumber === activeCell) {
      cellStyle.push(style.default, style.mouseOver);
    } else if (rowNumber <= activeRow && columnNumber <= activeCell) {
      cellStyle.push(style.default, style.active);
    } else {
      cellStyle.push(style.default);
    }

    if (rowNumber <= selectedRow && columnNumber <= selectedColumn) {
      cellStyle.push(style.selected);
    }

    return (
      <div
        style={outerStyle}
        onMouseOver={e =>
          onMouseOver(e, {rowNumber, columnNumber, rowHeight, cellWidth})}
        onMouseOut={onMouseOut}
        onClick={e =>
          onClick(e, {rowNumber, columnNumber, rowHeight, cellWidth})}
        >
        <div style={cellStyle}/>
      </div>
    );
  }
}

/* eslint-disable max-len */
import React, {Component, PropTypes} from 'react';

import {DivTable, DivRow, DivCell} from 'react-modular-table';
import Dimensions from './dimensions';
import Radium from 'radium';
import THEME from './styles';

@Radium
export default class HoverTable extends Component {
  constructor(props) {
    super(props);

    this.onClickColumn = this.onClickColumn.bind(this);
    this.onMouseOverColumn = this.onMouseOverColumn.bind(this);
    this.onMouseOutColumn = this.onMouseOutColumn.bind(this);

    this.state = {
      activeRow: null,
      activeCell: null
    };
  }

  static defaultProps = {
    width: 350,
    height: 350,
    row: 12,
    column: 12,
    theme: 'dark',
    onMouseOver: arg => arg,
    onMouseOut: arg => arg,
    onClick: arg => arg
  };

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    theme: PropTypes.string,
    selectedRow: PropTypes.number,
    selectedColumn: PropTypes.number,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onClick: PropTypes.func
  };

  onClickColumn(e, data) {
    this.props.onClick(e, data);
  }

  onMouseOverColumn(e, data) {
    this.props.onMouseOver(e, data);

    const x = (data.columnNumber + 1) * (e.target.getAttribute('data-cellWidth') ||
      e.target.parentNode.getAttribute('data-cellWidth'));
    const y = (data.rowNumber + 1) * (e.target.getAttribute('data-rowHeight') ||
      e.target.parentNode.getAttribute('data-rowHeight'));

    this.setState({
      activeRow: data.rowNumber,
      activeCell: data.columnNumber
    });
    this.dimensions.setTranslate(x, y, data);
  }

  onMouseOutColumn(e) {
    this.props.onMouseOut(e);

    this.setState({
      activeRow: null,
      activeCell: null
    });
    this.dimensions.hideDimensions();
  }

  render() {
    const {
      width,
      height,
      row,
      theme,
      column,
      selectedRow,
      selectedColumn
    } = this.props;

    const {
      activeCell,
      activeRow
    } = this.state;

    // theme style
    const containerStyle = THEME[theme].container;
    const tableStyle = THEME[theme].table;
    const rowStyle = THEME[theme].row;
    const cellOuterStyle = THEME[theme].cellOuter;
    const cellStyle = THEME[theme].cell;

    const rowArr = [].constructor.apply(this, new Array(row));
    const columnArr = [].constructor.apply(this, new Array(column));

    return (
      <div style={[containerStyle]}>
        <div style={{position: 'relative'}}>
          <Dimensions ref={node => {
            this.dimensions = node;
          }}/>
          <DivTable width={width} height={height} outerStyle={tableStyle}>
            {
              rowArr.map((val, rowNumber) =>
                <DivRow key={rowNumber} style={rowStyle}>
                  {
                    columnArr.map((val, columnNumber) => {
                      let cellStyleArr = [];
                      if (rowNumber === activeRow && columnNumber === activeCell) {
                        cellStyleArr.push(cellStyle.default, cellStyle.mouseOver);
                      } else if (rowNumber <= activeRow && columnNumber <= activeCell) {
                        cellStyleArr.push(cellStyle.default, cellStyle.active);
                      } else {
                        cellStyleArr.push(cellStyle.default);
                      }

                      if (rowNumber <= selectedRow && columnNumber <= selectedColumn) {
                        cellStyleArr.push(cellStyle.selected);
                      }

                      return (
                        <DivCell
                          key={columnNumber}
                          outerStyle={cellOuterStyle}
                          style={cellStyleArr}
                          onMouseOut={this.onMouseOutColumn}
                          onMouseOver={e =>
                            this.onMouseOverColumn(e, {rowNumber, columnNumber})}
                          onClick={e =>
                            this.onClickColumn(e, {rowNumber, columnNumber})}
                          />
                      );
                    })
                  }
                </DivRow>
              )
            }
          </DivTable>
        </div>
      </div>
    );
  }
}

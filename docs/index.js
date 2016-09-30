import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HoverTable from '../src';

class HoverTableDemo extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.state = {
      selectedColumn: null,
      selectedRow: null
    };
  }

  onClick(e, data) {
    this.action.innerHTML = 'Click!';
    // data
    this.rowNumber.innerHTML = data.rowNumber;
    this.columnNumber.innerHTML = data.columnNumber;
    this.rowHeight.innerHTML = data.rowHeight;
    this.cellWidth.innerHTML = data.cellWidth;

    this.setState({
      selectedColumn: data.columnNumber,
      selectedRow: data.rowNumber
    });
  }

  onMouseOut() {
    this.action.innerHTML = 'On mouse out!';
    // data
    this.rowNumber.innerHTML = 'none';
    this.columnNumber.innerHTML = 'none';
    this.rowHeight.innerHTML = 'none';
    this.cellWidth.innerHTML = 'none';
  }

  onMouseOver(e, data) {
    this.action.innerHTML = 'On mouse over!';
    // data
    this.rowNumber.innerHTML = data.rowNumber;
    this.columnNumber.innerHTML = data.columnNumber;
    this.rowHeight.innerHTML = data.rowHeight;
    this.cellWidth.innerHTML = data.cellWidth;
  }

  render() {
    const style = {width: '50%', float: 'left'};
    const {selectedRow, selectedColumn} = this.state;

    return (
      <div>
        <div style={style}>
          <HoverTable
            column={12}
            row={12}
            width={300}
            height={300}
            selectedRow={selectedRow}
            selectedColumn={selectedColumn}
            onClick={this.onClick}
            onMouseOut={this.onMouseOut}
            onMouseOver={this.onMouseOver}
            />
        </div>

        <div style={style}>
          <div>
            <h3>Action: </h3>
            <hr/>
            <div ref={node => {
              this.action = node;
            }}/>
          </div>

          <div>
            <h3>Data: </h3>
            <hr/>
            <h5>rowNumber: </h5>
            <div ref={node => {
              this.rowNumber = node;
            }}/>
            <h5>columnNumber: </h5>
            <div ref={node => {
              this.columnNumber = node;
            }}/>
            <h5>rowHeight: </h5>
            <div ref={node => {
              this.rowHeight = node;
            }}/>
            <h5>cellWidth: </h5>
            <div ref={node => {
              this.cellWidth = node;
            }}/>
            <h5>selectedRow: </h5>
            <div>{selectedRow ? selectedRow + 1 : 'none'}</div>
            <h5>selectedColumn: </h5>
            <div>{selectedColumn ? selectedColumn + 1 : 'none'}</div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <HoverTableDemo/>
, document.getElementById('root'));

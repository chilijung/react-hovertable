import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HoverTable from '../src';

class HoverTableDemo extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onClick(e, data) {
    this.action.innerHTML = 'Click!';
    // data
    this.rowNumber.innerHTML = data.rowNumber;
    this.cellNumber.innerHTML = data.cellNumber;
    this.rowHeight.innerHTML = data.rowHeight;
    this.cellHeight.innerHTML = data.cellHeight;
  }

  onMouseOut(e, data) {
    this.action.innerHTML = 'On mouse out!';
    // data
    this.rowNumber.innerHTML = 'none';
    this.cellNumber.innerHTML = 'none';
    this.rowHeight.innerHTML = 'none';
    this.cellHeight.innerHTML = 'none';
  }

  onMouseOver(e, data) {
    this.action.innerHTML = 'On mouse over!';
    // data
    this.rowNumber.innerHTML = data.rowNumber;
    this.cellNumber.innerHTML = data.cellNumber;
    this.rowHeight.innerHTML = data.rowHeight;
    this.cellHeight.innerHTML = data.cellHeight;
  }

  render() {
    const style = {width: '50%', float: 'left'};

    return (
      <div>
        <div style={style}>
          <HoverTable
            column={12}
            row={12}
            width={300}
            height={300}
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
            <h5>cellNumber: </h5>
            <div ref={node => {
              this.cellNumber = node;
            }}/>
            <h5>rowHeight: </h5>
            <div ref={node => {
              this.rowHeight = node;
            }}/>
            <h5>cellHeight: </h5>
            <div ref={node => {
              this.cellHeight = node;
            }}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <HoverTableDemo/>
, document.getElementById('root'));

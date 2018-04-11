import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HoverTable from '../src';

class HoverTableDemo extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeTheme = this.onChangeTheme.bind(this);

    this.state = {
      selectedColumn: null,
      selectedRow: null,
      showDimension: true,
      theme: 'light'
    };
  }

  onClick(e, data) {
    this.action.innerHTML = 'Click!';
    // data
    this.rowNumber.innerHTML = data.rowNumber;
    this.columnNumber.innerHTML = data.columnNumber;

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
  }

  onMouseOver(e, data) {
    this.action.innerHTML = 'On mouse over!';
    // data
    this.rowNumber.innerHTML = data.rowNumber;
    this.columnNumber.innerHTML = data.columnNumber;
  }

  onChange(e) {
    this.setState({
      showDimension: e.target.checked
    });
  }

  onChangeTheme(e) {
    this.setState({
      theme: e.target.value
    });
  }

  render() {
    const style = {width: '50%', float: 'left'};
    const {selectedRow, selectedColumn, theme} = this.state;

    return (
      <div>
        <div style={style}>
          <div>
            <input type="checkbox" checked={this.state.showDimension}
              ref="showDimension" onChange={this.onChange}/>
              show dimension or not
          </div>
          <div>
            <h3>Choose your theme!</h3>
            <div>
            <input type="radio" name="theme" value="dark"
              checked={theme === 'dark'}
              onChange={this.onChangeTheme}/>
              dark
            </div>
            <div>
            <input type="radio" name="theme" value="light"
              checked={theme === 'light'}
              onChange={this.onChangeTheme}/>
              light
            </div>
          </div>
          <HoverTable
            column={12}
            row={12}
            width={300}
            height={300}
            selectedRow={selectedRow}
            theme={theme}
            showDimension={this.state.showDimension}
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

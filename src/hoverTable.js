import React, {Component, PropTypes} from 'react';

import Table from './components/table';
import Row from './components/row';
import Dimensions from './dimensions';
import Radium from 'radium';

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
    row: 20,
    column: 20
  };

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
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
    const x = (data.columnNumber + 1) * data.cellHeight;
    const y = (data.rowNumber + 1) * data.rowHeight;

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
      column
    } = this.props;

    const rowArr = [].constructor.apply(this, new Array(row));

    const style = {
      backgroundColor: '#383e4c',
      position: 'relative',
      padding: '5px',
      width: width,
      height: height,
      boxSizing: 'content-box',
      MozBoxSizing: 'content-box',
      WebkitBoxSizing: 'content-box'
    };

    return (
      <div style={[style]}>
        <Table width={width} height={height}>
          {
            rowArr.map((val, i) =>
              <Row
                {...this.props}
                {...this.state}
                rowHeight={height / column}
                key={i}
                rowNumber={i}
                onClick={this.onClickColumn}
                onMouseOver={this.onMouseOverColumn}
                onMouseOut={this.onMouseOutColumn}
                />
            )
          }
          <Dimensions ref={node => {
            this.dimensions = node;
          }}/>
        </Table>
      </div>
    );
  }
}

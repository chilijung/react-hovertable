import React from 'react';
import ReactDOM from 'react-dom';
import HoverTable from '../src';

const onClick = (e, data) => {
  console.log('click', e, data);
};

const onMouseOver = (e, data) => {
  console.log('onMouseOver', e, data);
};

const onMouseOut = e => {
  console.log(e);
};

ReactDOM.render(
  <HoverTable
    column={12}
    row={12}
    width={300}
    height={300}
    onClick={onClick}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
    />
, document.getElementById('root'));

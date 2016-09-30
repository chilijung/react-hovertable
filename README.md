# react-hovertable [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> react hovertable to select column and row in a table!

## Installation

```sh
$ npm install --save react-hovertable
```

## Usage

```js
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
```

## Demo

[LIVE DEMO](https://canner.github.io/react-hovertable)

<img src="./docs/demo.png" width="200"/>

## Example

clone the repository

```
node devServer.js
// open http://localhost:9393
```

## License

MIT © [Canner](https://github.com/canner)


[npm-image]: https://badge.fury.io/js/react-hovertable.svg
[npm-url]: https://npmjs.org/package/react-hovertable
[travis-image]: https://travis-ci.org/Canner/react-hovertable.svg?branch=master
[travis-url]: https://travis-ci.org/Canner/react-hovertable
[daviddm-image]: https://david-dm.org/Canner/react-hovertable.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Canner/react-hovertable

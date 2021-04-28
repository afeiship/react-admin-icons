# react-admin-icons
> Icons for admin system.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-admin-icons
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-admin-icons/dist/style.css";

  // or use sass
  @import "~@jswork/react-admin-icons/dist/style.scss";

  // customize your styles:
  $react-admin-icons-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAdminIcons from '@jswork/react-admin-icons';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-admin-icons">
          <ReactAdminIcons className="mb-5 has-text-white" />
          <button className="button is-primary is-fullwidth">Start~</button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-admin-icons/


## license
Code released under [the MIT license](https://github.com/afeiship/react-admin-icons/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-admin-icons
[version-url]: https://npmjs.org/package/@jswork/react-admin-icons

[license-image]: https://img.shields.io/npm/l/@jswork/react-admin-icons
[license-url]: https://github.com/afeiship/react-admin-icons/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-admin-icons
[size-url]: https://github.com/afeiship/react-admin-icons/blob/master/dist/react-admin-icons.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-admin-icons
[download-url]: https://www.npmjs.com/package/@jswork/react-admin-icons

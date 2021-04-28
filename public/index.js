import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAdminIcons from '../src/main';
import { glyphs } from './assets/iconfont.json';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-admin-icons">
        <h1 className="title">Icon static method</h1>
        {ReactAdminIcons.Icons('date', { size: 100 })}
        <h1 className="title">Icon list</h1>
        <div className="is-list">
          {glyphs.map((item) => {
            return (
              <span key={item.font_class} className="is-item">
                <ReactAdminIcons size={24} value={item.font_class} />
                <em>{item.name}</em>
                <code className="my-2">{item.font_class}</code>
              </span>
            );
          })}
        </div>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

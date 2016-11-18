import React, {Component} from 'react';
import Test from './Test';

export default class App extends Component {
  render() {
    return (
      <div className="react-app">
        <h1>Welcome to React + Webpack + ES6 + SASS Starter:)</h1>
        <Test text="Grab some sample info and start coding away" />
      </div>
    );
  }
}

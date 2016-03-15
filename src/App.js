import React from 'react';
import FollowApp from './FollowApp';
import './stylesheets/app.scss';

class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default App;
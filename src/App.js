import React from 'react';
import Connect_app from './Connect_app';

class App extends React.Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

export default App;
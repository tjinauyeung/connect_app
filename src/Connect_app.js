import React from 'react';
import Appform from './Appform';

class Connect_app extends React.Component {
    render() {
    	let container = {
    		display: 'flex',
    		height: '100vh',
    		width: '100vw',
    		justifyContent: 'center',
    		alignItems: 'center'
    	}

        return (
            <div style={container}>
            	<Appform />
            </div>
        );
    }
}

export default Connect_app;
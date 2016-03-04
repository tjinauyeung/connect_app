import React from 'react';

class Appform extends React.Component {
    render() {

    	let input = {
    		height: '40px',
    		width: '500px',
    		fontSize: '22px'
    	}

        return (
            <form>
            	<p>What would you like to do?</p>
            	<input style={input} />
            </form>
        );
    }
}

export default Appform;
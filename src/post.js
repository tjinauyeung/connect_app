import React from 'react';

class Post extends React.Component {
  constructor(){
    super();
  }

  render() {

    return (
      <div>
        <h2>{this.props.description}</h2>
      </div>
    );
  }
}


export default Post;
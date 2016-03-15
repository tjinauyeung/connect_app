import React from 'react';
import { Link } from 'react-router';

class Forum extends React.Component {
  constructor(){
    super();

    this.props = {
      posts: []
    };
  }



  render(){

    let container = {
      display: 'inline-block',
    }
    let forum = {
      borderRadius: '10px',
      background: 'white',
      margin: '10px',
      padding: '20px',
      width: '450px',
      display: 'inline-block',
      verticalAlign: 'top'
    }
    let apost = {
      backgroundColor: '#ededed',
      padding: '20px',
      marginTop: '20px',
    }
    let inputarea = {
      marginTop: '20px',
      display: 'inline-block',
      verticalAlign: 'top'
    }
    let textarea = {
      width: '410px',
      height: '100px',
      border: '1px solid black',
      outline: 'none',

    }
    return (
      <div style={forum}>
      {this.props.posts.map((post) => {
        return <div style={apost} key={post.id}>{post.description}</div>
      }, this)}
        <div style={inputarea}>
          <form>
            <textarea ref="chatarea" style={textarea}></textarea>
            <button>Let's meet</button>
          </form>
        </div>
      </div>
    );
  }
}


export default Forum;
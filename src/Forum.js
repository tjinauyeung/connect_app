import React from 'react';
import { Link } from 'react-router';

class Forum extends React.Component {
  constructor(){
    super();

    this.props = {
      posts: []
    };
  }

  submitForm(event){
    event.preventDefault();

    let matt = {
      name: 'Matt',
      country: 'Canada',
      photo: 'http://www.homefacts.com/images/offenders/indiana/thumb/1267401.jpg',
      user_id: '1'
    }

    let post = {
      id: null,
      description: this.refs.chatarea.value,
      restaurant_id: 8,
      user: matt
    }

    jQuery.ajax ({
      type: "POST",
      url: "https://still-retreat-87985.herokuapp.com/restaurants/" + restaurantId + "/posts/",
      data: JSON.stringify ({
        review: review
      }),
      contentType: "application/json",
      dataType: "json"
    })
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
          <form onSubmit={this.submitForm.bind(this)}>
            <textarea ref="chatarea" style={textarea}></textarea>
            <button>Let's meet</button>
          </form>
        </div>
      </div>
    );
  }
}


export default Forum;
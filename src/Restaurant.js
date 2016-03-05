import React from 'react';
import { Link } from 'react-router';

class Restaurant extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.setState({
      key: this.props.key,
      id: this.props.id,
      name: this.props.name,
      street: this.props.street,
      city: this.props.city,
      country: this.props.country,
      phone: this.props.phone,
      website: this.props.website,
      photo: this.props.photo,
      logo: this.props.logo
    })
  }

  render() {
    //begin styling
    let card = {
      borderRadius: '10px',
      background: 'white',
      margin: '1%',
      padding: '20px',
      width: '310px',
      display: 'inline-block',
      verticalAlign: 'top'
    }
    let list = {
      listStyleType: 'none',
      fontSize: '12px',
      lineHeight: '30px',
      padding: '0',
    }
    let listuser = {
      listStyleType: 'none',
      padding: '0'
    }
    let title = {
      textTransform: 'uppercase',
      color: '#FE4F72',
      textAlign: 'center',
      marginTop: '0',
      lineHeight: '40px'
    }
    let photo = {
      width: '310px',
      height: '180px',
      position: 'relative',
      left: '-20px'
    }
    let logo = {
      maxWidth: '50%',
      margin: 'auto',
      display: 'block'
    }
    let userthumb = {
      borderRadius: '50%',
      height: '30px',
      width: '30px'
    }
    let useritem = {
      display: 'inline-block',
      paddingTop: '10px',
      paddingRight: '10px'
    }
    //end styling

    return (
        <div style={card}>
          <ul style={list}>
            <li><h2 style={title}>{this.state.name}</h2></li>
            <li><img style={photo} src={this.state.photo} /></li>
            <li>{this.state.street}</li>
            <li>{this.state.city}</li>
            <li>{this.state.phone}</li>
            <li><strong>Interested:</strong></li>
            <ul style={listuser}>
              <li style={useritem} ><img style={userthumb} src="https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"/></li>
              <li style={useritem} ><img style={userthumb} src="https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"/></li>
              <li style={useritem} ><img style={userthumb} src="https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"/></li>
              <li style={useritem} ></li>
            </ul>
          </ul>
        </div>
    );
  }
}


export default Restaurant;
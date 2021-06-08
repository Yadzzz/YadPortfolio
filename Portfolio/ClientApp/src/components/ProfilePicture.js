import React, { Component } from 'react';
import Picture from '../assets/IMG_1897.png';
import './Home.css'

export class ProfilePicture extends Component {

  render () {
    return (
        <img src={Picture} class="profile-image" width="500" height="400" /> 
    );
  }
}

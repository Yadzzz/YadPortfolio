import React, { Component } from 'react';
import Picture from '../assets/arbetserfarenhet.png';
import './Home.css'

export class ExperiencePicture extends Component {

  render () {
    return (
        <img src={Picture} class="profile-image" /> 
    );
  }
}

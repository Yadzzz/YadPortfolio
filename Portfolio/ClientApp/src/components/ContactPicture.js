import React, { Component } from 'react';
import Picture from '../assets/kontakt.png';
import './Home.css'

export class ContactPicture extends Component {

  render () {
    return (
        <img src={Picture} alt="contact logo" /> 
    );
  }
}

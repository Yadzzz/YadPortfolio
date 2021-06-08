import React, { Component } from 'react';
import './Home.css'

export class TopBar extends Component {
  static displayName = TopBar.name;

  render () {
    return (
                <div class="header">
                    <div class="header-right">
                        <a href="#hem" class="button">Hem</a>
                        <a href="#om-mig" class="button">Om mig</a>
                        <a href="#arbetserfarenhet" class="button">Arbetserfarenhet</a>
                        <a href="#kontakt" class="button">Kontakt</a>
                    </div>
                </div>
    );
  }
}

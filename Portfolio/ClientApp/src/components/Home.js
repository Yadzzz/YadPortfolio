import React, { Component } from 'react';
import { TopBar } from './TopBar.js';
import './Home.css'
import { ContactPicture } from './ContactPicture';
import { ProfilePicture } from './ProfilePicture';
import { ExperiencePicture } from './ExperiencePicture';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <body>
                <TopBar />

                <div class="container-dark" id="hem">
                    <div class="top-intro-text">
                        <h1>Yad Mohamad</h1>
                    </div>

                    <div class="top-intro-image">
                        <ProfilePicture />
                    </div>
                    </div>

                    <div class="container-light" id="om-mig">
                        <div class="collumn-left">
                            <h3>Om mig</h3>
                        <p>Mitt namn �r Yad Mohamad och �r 22 �r gammal. Just nu studerar jag systemutveckling. 
                            Som person �r jag v�ldig social och gillar att umg�s och l�ra k�nna nya personer hela tiden
                            P� fritiden s� �gnar jag mig mest �t jobb och programmering. 
                            </p>
                         </div>
                        <div class="collumn-right">
                            <h3>Erfarenheter</h3>
                            <p>- .NET</p>
                            <p>- C#</p>
                            <p>SQL</p>
                            <p>MySQL</p>
                            <p>Java</p>
                            <p>PHP</p>
                        </div>
                    </div>

                    <div class="container-dark" id="arbetserfarenhet">
                        <div class="collumn-left">
                          <ExperiencePicture />
                        </div>
                            <div class="collumn-right">
                                <h3>Arbetserfarenhet</h3>
                                <p><b>Mathem</b> - Orderplock</p>
                                <p><b>PostNord</b> - Brevsortering</p>
                                <p><b>Plastal</b> - Kvalitetsstyrare & Mont�r</p>
                                <p><b>KappAhl lager</b> - Orderplock</p>
                                <p><b>Lidl</b> - Renovering av butikerna i V�stra G�taland</p>
                            </div>
                        </div>

                        <div class="container-light" id="kontakt">
                            <div class="collumn-left">
                                <h3>Kontakt</h3>
                                <p><b>Email</b>: yad22@hotmail.com</p>
                                <p><b>LinkedIn</b>: <a href="https://se.linkedin.com/in/yad-mohamad-2828b51a2">YadMohamad</a></p>
                                <p><b>GitHub</b>: Yadzzz</p>
                            </div>
                            <div class="collumn-right">
                                <ContactPicture />
                             </div>
                            </div>

         </body>
      </div>
    );
  }
}

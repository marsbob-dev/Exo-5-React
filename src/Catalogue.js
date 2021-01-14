import React, {Component} from 'react';
import Profil from './components/Profil'

class Catalogue extends Component {

  render(){
    return (
      <div>
        <Profil name="Bohbot" surname="Marcelin">
          Best homme de la terre
        </Profil>
        <Profil name="Primo" surname="Nicolas">
          Coach
        </Profil>
        <Profil name="Navez" surname="Martin">
          Best man de l'univers
        </Profil>
        <Profil name="Ouassari" surname="Ibrahim">
          Patwon 
        </Profil>
      </div>
    )
  }
}

export default Catalogue;
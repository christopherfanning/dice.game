import React, { Component } from 'react';
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Player from "./components/Player";
import Game from "./components/Game";
import "./components/Player.css";

class App extends Component {

  state = {
    active: false,
    
    player1: "player1",
    player2: "player2",
    nameMe: "square Player switch-on"
  }

  switchNameHandler = () => {
    // console.log('was clicked')
    
     this.setState((state) => {
       return ( {player1: "square Player switch-off"})
     })
  
     
this.setState((state) => {
  return {player2: "square Player switch-off"} 
})



      console.log('hey from else!');
      console.log(this.state.nameMe);   
    }
   

  


  render() {
   
  // let playerTurn = 0;
  // let roundTotal = 0;
  // let player1Total = 0;
  // let player2Total = 0;
  // let isActive = "isActive";
  // let player1 = "player1"
  // let player2 = '"player2"'

  return (
    <CssBaseline>
      <div className="App">
        <h1> Welcome to the Thunder Dome dice game</h1>
        
        <Player nameMe={this.state.player1}></Player>
        
        <Player nameMe={this.state.player2}></Player>
        <br></br>
        
        <Button onClick={this.switchNameHandler} variant="contained" color="primary">
          Switch Player
        </Button>

        <Game></Game>
      </div>
    </CssBaseline>
  );
}
}

export default App;

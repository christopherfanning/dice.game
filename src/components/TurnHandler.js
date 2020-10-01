import React, { Component } from 'react'

export class TurnHandler extends Component {

    state = {
        player1Turn: true,
        player1: "player1 Player",
        player2: "player2 Player",
        nameMe: "square Player switch-on",
      };
    
      switchNameHandler = () => {
        // console.log('was clicked')
    
        if (this.state.player1Turn) {
          this.setState((state) => {
            return { player1: "square Player switch-off" };
          });
    
          this.setState((state) => {
            return { player2: "square Player switch-on" };
          });
          this.setState({
            player1Turn: false
            
          });
          console.log(this.state.player1Turn);
        }
        else {
          this.setState((state) => {
            return { player1: "square Player switch-on" };
          });
    
          this.setState((state) => {
            return { player2: "square Player switch-off" };
          });
          this.setState({
            player1Turn: true
            
          });
          console.log(this.state.player1Turn);
        }
        
        console.log(this.state.nameMe);
      };
      
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default TurnHandler

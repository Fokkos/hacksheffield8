import React from "react";
import ConfettiExplosion from "react-confetti-explosion";

export default class HackConfetti extends React.Component {
  state = {
    show: false
  }

  toggleShown = () => {
    console.log(this.state.show)
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return <>{this.state.show && <ConfettiExplosion />}</>
  }
}
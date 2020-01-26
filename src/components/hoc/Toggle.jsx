import React, { Component } from "react";

export default class Toggle extends Component {
  state = {
    isToggled: false
  };

  toggle = () => {
    this.setState(state => ({ isToggled: !state.isToggled }));
  };

  close = e => {
    if (e.key === "Escape") {
      this.setState({ isToggled: false });
    }
  };

  componentDidMount() {
    if (document) {
      document.addEventListener(this.props.eventName, this.toggle);
      if (this.props.escape) {
        document.addEventListener("keydown", this.close);
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener(this.props.eventName, this.toggle);
    if (this.props.escape) {
      document.removeEventListener("keydown", this.close);
    }
  }

  render() {
    return (
      <this.props.component {...this.props} isToggled={this.state.isToggled} />
    );
  }
}

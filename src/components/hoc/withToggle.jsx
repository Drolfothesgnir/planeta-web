import React, { Component } from "react";

export default function withToggle(WrappedComponent, eventName) {
  return class extends Component {
    state = {
      isToggled: false
    };

    toggle = () => {
      this.setState(state => ({ isToggled: !state.isToggled }));
    };

    componentDidMount() {
      if (document) {
        document.addEventListener(eventName, this.toggle);
      }
    }

    componentWillUnmount() {
      document.removeEventListener(eventName, this.toggle);
    }

    render() {
      return (
        <WrappedComponent {...this.props} isToggled={this.state.isToggled} />
      );
    }
  };
}

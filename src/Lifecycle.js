import React from "react";

export default class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "areej",
    };
  }

  componentWillMount() {
    this.setState({ name: "ifrah" });
  }

  render() {
    return (
      <>
        <h1>Practising Mounting components methods</h1>
        <h1>Updated name in records {this.state.name}</h1>
      </>
    );
  }

  componentDidMount() {
    //runs after render
    this.setState({ name: "ayiza" });
  }
}

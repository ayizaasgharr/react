import React from "react";

export default class LifeCycle2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "areej",
      needUpdate: true,
      count: 0,
    };
  }

  render() {
    return (
      <>
        <h1>Practising Updating Components Methods</h1>
        <h1>Updated name in records {this.state.name}</h1>
      </>
    );
  }

  componentDidMount() {
    //runs after render
    this.setState({ name: "ayiza" });
  }

  componentWillUpdate() {
    if (this.state.needUpdate && this.state.count == 0) {
      this.setState({ name: "fatima", needUpdate: false });
    }
  }

  componentDidUpdate() {
    if (this.state.count == 0) {
      this.setState({ needUpdate: true, count: 1 });
    }

    if (this.state.needUpdate) {
      this.setState({ name: "amna" });
    }
  }
}

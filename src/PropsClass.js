import React from "react";

class PropsClass2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <h2>this is props class 2 {this.props.name}</h2>
        <h2>{this.props.f1()}</h2>
      </>
    );
  }
}

class PropsClass3 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <h3>this is props class 3 {this.props.name}</h3>
        <h2>{this.props.f1()}</h2>
      </>
    );
  }
}

class PropsClass extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
    this.myFirstFuntion = this.myFirstFuntion.bind(this);
  }
  myFirstFuntion() {
    return <p>Passed from child</p>;
  }

  render() {
    return (
      <>
        <h1>Practising Props through Lifecycle Method</h1>
        <PropsClass2 name={"ayiza"} f1={this.myFirstFuntion} />
        <PropsClass3 name={"amaal"} f1={this.myFirstFuntion} />
      </>
    );
  }
}

export default PropsClass;

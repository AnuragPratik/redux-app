import React, { Component } from "react";
import { connect } from "react-redux";

class SagaApp extends Component {
  render() {
    return (
      <div>
        <h1>Working with redux saga</h1>
        <div>Your Age: {this.props.age}</div>
        <br />
        <button onClick={this.props.onAgeUp}>AgeUP</button>
        <button onClick={this.props.onAgeDown}>AgeDOWN</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { age: state.age };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SagaApp);

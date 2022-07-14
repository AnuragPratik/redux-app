import React, { Component } from "react";
import { connect } from "react-redux";
import { addInputs, subtractInputs } from "../actions/calculatorActions";

class Calculator extends Component {
  input1 = React.createRef();
  input2 = React.createRef();

  render() {
    let intA, intB;
    return (
      <div>
        <h2>Using React & Redux</h2>
        <div>
          Input 1:
          <input type="text" placeholder="0" ref={this.input1} />
        </div>
        <div>
          Input 2:
          <input type="text" placeholder="0" ref={this.input2} />
        </div>
        <div>
          Output:
          <input
            type="text"
            placeholder="0"
            readOnly
            value={this.props.outputProp}
          />
        </div>
        <div>
          <button
            onClick={() => {
              intA = parseInt(this.input1.current.value) || 0;
              intB = parseInt(this.input2.current.value) || 0;
              this.props.dispatch(addInputs(intA, intB));
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              intA = parseInt(this.input1.current.value) || 0;
              intB = parseInt(this.input2.current.value) || 0;
              this.props.dispatch(subtractInputs(intA, intB));
            }}
          >
            Subtract
          </button>
        </div>
      </div>
    );
  }
}

// callback for getting store state data
const mapStateToProps = (state) => ({
  outputProp: state.output,
});

export default connect(mapStateToProps)(Calculator);

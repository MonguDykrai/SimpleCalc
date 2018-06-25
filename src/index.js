import React, { Component } from "react";
import { render } from "react-dom";
import DisplayStateChange from "./Components/DisplayStateChange/";

import "./styles.css";

const styles = {
  button: {
    display: "inline-block",
    width: 100,
    height: 40,
    outline: "none",
    border: "1px solid #999"
  },
  displayValue: {
    color: "red",
    fontSize: 50
  }
};

class Calculator extends Component {
  state = {
    displayValue: "0",
    valueWaitingForAnOperation: null,
    operator: null,
    isWaitingForOperation: false
  };

  render() {
    const { displayValue } = this.state;
    return (
      <div className="Calculator">
        <div style={styles.displayValue}>{displayValue}</div>
        <button style={styles.button} onClick={() => this.clearDisplay()}>
          AC
        </button>
        <button style={styles.button} onClick={() => this.inputOne(1)}>
          1
        </button>
        <button style={styles.button} onClick={() => this.inputPlus()}>
          +
        </button>
        <button style={styles.button} onClick={() => this.inputTwo(2)}>
          2
        </button>
        <button style={styles.button} onClick={() => this.inputEuqal()}>
          =
        </button>
        <DisplayStateChange {...this.state} />
      </div>
    );
  }

  clearDisplay() {
    this.setState({
      displayValue: "0",
      valueWaitingForAnOperation: null,
      operator: null,
      isWaitingForOperation: false
    });
  }

  inputOne(value) {
    const { displayValue, isWaitingForOperation } = this.state;
    if (isWaitingForOperation) {
      this.setState({
        displayValue: String(value),
        isWaitingForOperation: false
      });
    } else {
      this.setState({
        displayValue:
          displayValue === "0" ? String(value) : displayValue + value
      });
    }
  }

  inputTwo(value) {
    const { displayValue, isWaitingForOperation } = this.state;
    if (isWaitingForOperation) {
      this.setState({
        displayValue: String(value),
        isWaitingForOperation: false
      });
    } else {
      this.setState({
        displayValue:
          displayValue === "0" ? String(value) : displayValue + value
      });
    }
  }

  inputPlus() {
    const { displayValue } = this.state;
    this.setState({
      valueWaitingForAnOperation: displayValue,
      operator: "+",
      isWaitingForOperation: true
    });
  }

  inputEuqal() {
    const {
      displayValue,
      valueWaitingForAnOperation,
      isWaitingForOperation
    } = this.state;
    if (isWaitingForOperation) return;
    this.setState({
      displayValue: String(
        Number(displayValue) + Number(valueWaitingForAnOperation)
      ),
      valueWaitingForAnOperation: null,
      operator: null,
      isWaitingForOperation: true
    });
  }
}

render(<Calculator />, document.getElementById("root"));

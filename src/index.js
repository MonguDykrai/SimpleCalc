import React, { Component } from "react";
import { render } from "react-dom";

import "./styles.css";

const styles = {
  button: {
    display: "inline-block",
    width: 100,
    height: 40,
    outline: "none",
    border: "1px solid #999"
  }
};

class App extends Component {
  state = {
    displayValue: "0",
    valueWaitingForAnOperation: null,
    operator: null,
    isWaitingForOperation: false
  };
  render() {
    const {
      displayValue,
      valueWaitingForAnOperation,
      operator,
      isWaitingForOperation
    } = this.state;
    // console.log(this.state);
    return (
      <div className="App">
        <div style={{ color: "red", fontSize: 50 }}>{displayValue}</div>
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
        <div
          style={{
            width: 400,
            margin: "20px auto",
            position: "relative"
          }}
        >
          <div style={{ textAlign: "left" }}>{`{`}</div>
          <br />
          <div style={{ textAlign: "left" }}>
            &nbsp;&nbsp;displayValue:
            <span style={{ color: "#f00" }}>{` ${displayValue}`}</span>
          </div>
          <div style={{ textAlign: "left" }}>
            &nbsp;&nbsp;valueWaitingForAnOperation:
            <span
              style={{ color: "#f00" }}
            >{` ${valueWaitingForAnOperation}`}</span>
          </div>
          <div style={{ textAlign: "left" }}>
            &nbsp;&nbsp;operator:
            <span style={{ color: "#f00" }}>{` ${operator}`}</span>
          </div>
          <div style={{ textAlign: "left" }}>
            &nbsp;&nbsp;isWaitingForOperation:
            <span style={{ color: "#f00" }}>{` ${isWaitingForOperation}`}</span>
          </div>
          <br />
          <div style={{ textAlign: "left" }}>{`}`}</div>
        </div>
      </div>
    );
  }

  inputOne(value) {
    const { displayValue, isWaitingForOperation } = this.state;
    // console.log(String(value));
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
    // console.log(String(value));
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
    // console.log(`+`);
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
    // console.log(`=`);
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

render(<App />, document.getElementById("root"));

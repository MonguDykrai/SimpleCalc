import React, { Component } from "react";
import ReactDOM from "react-dom";

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
    valueWaitingForOperate: null,
    operator: null
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div style={{ color: "red", fontSize: 50 }}>
          {this.state.displayValue}
        </div>
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
      </div>
    );
  }

  inputOne(value) {
    const { displayValue } = this.state;
    console.log(String(value));
    this.setState({
      displayValue: displayValue === "0" ? String(value) : displayValue + value
    });
  }

  inputTwo(value) {
    const { displayValue, valueWaitingForOperate } = this.state;
    console.log(String(value));
    if (valueWaitingForOperate !== null) {
      this.setState({
        displayValue: String(value)
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
    console.log(`+`);
    this.setState({
      valueWaitingForOperate: displayValue,
      operator: "+"
    });
  }

  inputEuqal() {
    const { displayValue, valueWaitingForOperate } = this.state;
    console.log(`=`);
    this.setState({
      displayValue: String(
        parseFloat(displayValue) + parseFloat(valueWaitingForOperate)
      ),
      valueWaitingForOperate: null,
      operator: null
    });
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

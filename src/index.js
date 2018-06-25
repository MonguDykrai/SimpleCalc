import React, { Component } from "react";
import { render } from "react-dom";
import DisplayStateChange from "./Components/DisplayStateChange/";

import "./styles.css";

const styles = {
  button: {
    color: "#fff",
    fontSize: 20,
    display: "inline-block",
    width: 75,
    height: 50,
    outline: "none",
    border: "none",
    borderRadius: 35,
    marginRight: 8,
    marginBottom: 3,
    // border: "1px solid #999",
    backgroundColor: "#343434"
  },
  displayValue: {
    color: "#000",
    fontSize: 70,
    textAlign: "right",
    paddingRight: 24
  },
  function: {
    backgroundColor: "#A5A5A5",
    color: "#000"
  },
  operation: {
    backgroundColor: "#FF9501"
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
        <div>
          <button
            style={Object.assign({}, styles.button, styles.function)}
            onClick={() => this.clearDisplay()}
          >
            AC
          </button>
          <button
            style={Object.assign({}, styles.button, styles.function)}
            onClick={() => this.toggleSign()}
          >
            ±
          </button>
          <button
            style={Object.assign({}, styles.button, styles.function, {
              color: "#A5A5A5"
            })}
          >
            null
          </button>
        </div>
        <div>
          <button style={styles.button} onClick={() => this.inputOne(1)}>
            1
          </button>
          <button style={styles.button} onClick={() => this.inputTwo(2)}>
            2
          </button>
          <button style={styles.button} onClick={() => this.inputThree(3)}>
            3
          </button>
        </div>
        <div>
          <button style={styles.button} onClick={() => this.inputFour(4)}>
            4
          </button>
          <button style={styles.button} onClick={() => this.inputFive(5)}>
            5
          </button>
          <button style={styles.button} onClick={() => this.inputSix(6)}>
            6
          </button>
        </div>
        <div>
          <button style={styles.button} onClick={() => this.inputSeven(7)}>
            7
          </button>
          <button style={styles.button} onClick={() => this.inputEight(8)}>
            8
          </button>
          <button style={styles.button} onClick={() => this.inputNine(9)}>
            9
          </button>
        </div>
        <div>
          <button style={styles.button} onClick={() => this.inputZero(0)}>
            0
          </button>

          <button
            style={Object.assign({}, styles.button, styles.operation)}
            onClick={() => this.inputPlus()}
          >
            +
          </button>
          <button
            style={Object.assign({}, styles.button, styles.operation)}
            onClick={() => this.inputSubtract()}
          >
            -
          </button>
        </div>
        <div>
          <button
            style={Object.assign({}, styles.button, styles.operation)}
            onClick={() => this.inputMultiply()}
          >
            *
          </button>
          <button
            style={Object.assign({}, styles.button, styles.operation)}
            onClick={() => this.inputDivide()}
          >
            /
          </button>
          <button
            style={Object.assign({}, styles.button, styles.operation)}
            onClick={() => this.inputEuqal()}
          >
            =
          </button>
        </div>
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

  toggleSign() {
    const { displayValue } = this.state;

    this.setState({
      displayValue:
        displayValue.charAt(0) === "-"
          ? displayValue.substr(1)
          : `-${displayValue}`
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

  inputThree(value) {
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

  inputFour(value) {
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

  inputFive(value) {
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

  inputSix(value) {
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

  inputSeven(value) {
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

  inputEight(value) {
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

  inputNine(value) {
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

  inputZero(value) {
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

  inputSubtract() {
    const { displayValue } = this.state;
    this.setState({
      valueWaitingForAnOperation: displayValue,
      operator: "-",
      isWaitingForOperation: true
    });
  }

  inputMultiply() {
    const { displayValue } = this.state;
    this.setState({
      valueWaitingForAnOperation: displayValue,
      operator: "*",
      isWaitingForOperation: true
    });
  }

  inputDivide() {
    const { displayValue } = this.state;
    this.setState({
      valueWaitingForAnOperation: displayValue,
      operator: "/",
      isWaitingForOperation: true
    });
  }

  inputEuqal() {
    const {
      displayValue,
      valueWaitingForAnOperation,
      isWaitingForOperation,
      operator
    } = this.state;
    if (isWaitingForOperation) return;

    switch (operator) {
      case "+":
        this.setState({
          displayValue: String(
            Number(valueWaitingForAnOperation) + Number(displayValue)
          )
        });
        break;
      case "-":
        this.setState({
          displayValue: String(
            Number(valueWaitingForAnOperation) - Number(displayValue)
          )
        });
        break;
      case "*":
        this.setState({
          displayValue: String(
            Number(valueWaitingForAnOperation) * Number(displayValue)
          )
        });
        break;
      case "/":
        this.setState({
          displayValue: String(
            Number(valueWaitingForAnOperation) / Number(displayValue)
          )
        });
        break;
    }

    this.setState({
      valueWaitingForAnOperation: null,
      operator: null,
      isWaitingForOperation: true
    });
  }
}

render(<Calculator />, document.getElementById("root"));

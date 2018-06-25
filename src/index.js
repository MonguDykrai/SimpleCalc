import React, { Component } from "react";
import { render } from "react-dom";
import DisplayStateChange from "./Components/DisplayStateChange/";

import "./styles.css";

const styles = {
  button: {
    display: "inline-block",
    width: 70,
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
        <button style={styles.button} onClick={() => this.toggleSign()}>
          ±
        </button>
        <button style={styles.button} onClick={() => this.inputOne(1)}>
          1
        </button>
        <button style={styles.button} onClick={() => this.inputTwo(2)}>
          2
        </button>
        <button style={styles.button} onClick={() => this.inputThree(3)}>
          3
        </button>
        <button style={styles.button} onClick={() => this.inputFour(4)}>
          4
        </button>
        <button style={styles.button} onClick={() => this.inputFive(5)}>
          5
        </button>
        <button style={styles.button} onClick={() => this.inputSix(6)}>
          6
        </button>
        <button style={styles.button} onClick={() => this.inputSeven(7)}>
          7
        </button>
        <button style={styles.button} onClick={() => this.inputEight(8)}>
          8
        </button>
        <button style={styles.button} onClick={() => this.inputNine(9)}>
          9
        </button>
        <button style={styles.button} onClick={() => this.inputZero(0)}>
          0
        </button>

        <button style={styles.button} onClick={() => this.inputPlus()}>
          +
        </button>
        <button style={styles.button} onClick={() => this.inputSubtract()}>
          -
        </button>
        <button style={styles.button} onClick={() => this.inputMultiply()}>
          *
        </button>
        <button style={styles.button} onClick={() => this.inputDivide()}>
          /
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

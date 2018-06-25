import React from "react";

const styles = {
  colorRed: {
    color: "#f00"
  },
  textAlignLeft: {
    textAlign: "left"
  },
  wrapper: {
    width: 400,
    margin: "20px auto",
    position: "relative"
  }
};

function DisplayStateChange({
  displayValue,
  valueWaitingForAnOperation,
  operator,
  isWaitingForOperation
}) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.textAlignLeft}>{`{`}</div>
      <br />
      <div style={styles.textAlignLeft}>
        &nbsp;&nbsp;displayValue:
        <span style={styles.colorRed}>{` ${displayValue}`}</span>
      </div>
      <div style={styles.textAlignLeft}>
        &nbsp;&nbsp;valueWaitingForAnOperation:
        <span style={styles.colorRed}>{` ${valueWaitingForAnOperation}`}</span>
      </div>
      <div style={styles.textAlignLeft}>
        &nbsp;&nbsp;operator:
        <span style={styles.colorRed}>{` ${operator}`}</span>
      </div>
      <div style={styles.textAlignLeft}>
        &nbsp;&nbsp;isWaitingForOperation:
        <span style={styles.colorRed}>{` ${isWaitingForOperation}`}</span>
      </div>
      <br />
      <div style={styles.textAlignLeft}>{`}`}</div>
    </div>
  );
}

export default DisplayStateChange;

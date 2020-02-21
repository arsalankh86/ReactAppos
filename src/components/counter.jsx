import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Form from "./Form";
import DisplayData from "./displaydata";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    count: 0,
    tags: ["t1", "t2", "t3"]
  };

  increaseCounter = () => {
    // this.state.count++;
    // this.setState();
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <Header />
        {/* <h1>{this.props.hp}</h1> */}

        <h4><u>Display Dynamic Listing</u></h4>
        <div>
          <ul>
            <li>Data</li>
          </ul>
          {this.props.children}
        </div>

        <ul>
          {" "}
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}{" "}
        </ul>
        <h4><u>Increment Counter</u></h4>
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.increaseCounter}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <br/>
        <br />
        <h4><u>React Form Example</u></h4>
        <Form />
        <br />

        <h4><u>React Ag Grid Example</u></h4>
        <DisplayData></DisplayData>
        <h2>{this.props.fp}</h2>
      </div>
      
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const ars = this.state.count;
    return ars === 0 ? "Zero" : ars;
  }
}

export default Counter;

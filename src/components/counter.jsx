import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Form from "./Form";
import DisplayData from "./displaydata";
import ReactDOM from 'react-dom';


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
        <Header/>
        {/* <h1>{this.props.hp}</h1> */}

        <div>
            <ul>
            <li>Data</li>
            </ul>
            {this.props.children}
         </div>
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.increaseCounter}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {" "}
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}{" "}
        </ul>
        <h2>{this.props.fp}</h2>
        <br />
        <Form />
        <br />
        <DisplayData></DisplayData>
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

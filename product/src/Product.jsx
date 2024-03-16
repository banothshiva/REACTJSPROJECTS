import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: 333,
      pname: "shiva",
      price: 200.20,
      company_name: this.props.company_name,
    };
  }

  change = () => {
    this.setState({ company_name: "ONEPLUSNORD" });
  };

  render() {
    const { pid, pname, price, company_name } = this.state;
    return (
      <>
        <h1>PRODUCT ID = {pid}</h1>
        <h1>PRODUCT NAME = {pname}</h1>
        <h1>PRODUCT PRICE = {price}</h1>
        <h1>PRODUCT COMPANY NAME = {company_name}</h1>
        <button onClick={this.change}>AFTER CHANGING NAME</button>
      </>
    );
  }
}

export default Product;

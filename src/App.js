import React, { Component } from 'react'

import Header from './Component/Header'
import Form from './Component/Form'
import Content from './Component/Content'


const API_URL = "http://localhost:5000/mews"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allMews: []
    };
    console.log("constructor");
    this.listAllMews();
  }

  async listAllMews() {
    const allMews = await fetch(API_URL).then(res => res.json());
    this.setState({
      allMews: allMews
    });
  }

  showContent() {
    console.log("Show content in app");
    return true || <Content allMews={this.state.allMews} />
    // console.log("gang");
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        {this.showContent()}
      </div>
    );
  }
}

export default App;

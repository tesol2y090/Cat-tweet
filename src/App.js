import React, { Component } from 'react'

import Header from './Component/Header'
import Form from './Component/Form'
import Content from './Component/Content'


const API_URL = "http://localhost:5000/mews"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const Mew = await fetch(API_URL).then(res => res.json());
    let mewArray = []
    for (const key in Mew) {
      mewArray.push(Mew[key])
    }
    this.setState({
      allMews: mewArray.reverse()
    });
  }

  showContent() {
    return this.state.allMews && this.state.allMews.map(mew => (
      <Content allMews={mew} />
    ));
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

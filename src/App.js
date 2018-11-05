import React, { Component } from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  text-align: center;
`
const MewForm = styled.form`
  width: 50%
  margin: 0 auto;
`
const Submit = styled.button`
  background: #FFB6C1;
  color: white;
`

class App extends Component {
  render() {
    return (
      <div>
        <Header>Meow - Cat tweeter 😸🐈</Header>
        <MewForm>
          <label for="name">Name</label>
          <input class="u-full-width" type="text" id="name" name="name" />
          <label for="content">Meow</label>
          <textarea class="u-full-width" type="text-area" id="content" name="content"></textarea>
          <Submit class="button-primary" type="submit">Send your Meow 😽</Submit>
        </MewForm>
      </div>
    );
  }
}

export default App;

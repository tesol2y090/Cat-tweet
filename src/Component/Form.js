import React, { Component } from 'react'
import styled from 'styled-components'

const MewForm = styled.form`
  width: 50%
  margin: 0 auto;
`
const Submit = styled.button`
  background: #FFB6C1;
  color: white;
`

const API_URL = "http://localhost:5000/mews"

class Form extends Component {

  Submit(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let content = event.target.content.value
    const tweet = {
      name: name,
      content: content
    }
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(tweet),
      headers: {
        'content-type': 'application/json'
      }
    })
    document.getElementById("mewForm").reset();
  }

  render() {
    return (
      <MewForm onSubmit={this.Submit} id="mewForm" >
          <label name="name">Name</label>
          <input className="u-full-width" type="text" id="name" name="name"/>
          <label name="content">Meow</label>
          <textarea className="u-full-width" type="text-area" id="content" name="content"></textarea>
          <Submit type="submit">Send your Meow 😽</Submit>
      </MewForm>
    )
  }
}

export default Form;
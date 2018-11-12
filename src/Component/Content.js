import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 1.6%;
    background: #F1F1F1;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;
    width: 50%;
`

const Header = styled.h1`
    line-height: 1;
    font-weight: 500;
    font-size: 36px;
    margin: 5px;
`

const DateFont = styled.h2`
    font-size: 12px;
    text-transform: uppercase;
    color: #676767;
    margin-top: 5px;
    margin-left: 10px;
`

const ContentFont = styled.p`
    text-align: left;
    position: relative;
    margin: 5px;
    margin-left: 10px;
`

class Content extends Component {

    render() {
        const {name, date, content} = this.props.allMews;
        return (
                <Card >
                   <Header>{name}</Header>
                   <DateFont>{date}</DateFont>
                   <ContentFont>{content}</ContentFont>
                </Card>
        )
    }
}

export default Content;
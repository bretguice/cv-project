import React, { Component } from 'react'
import styled from 'styled-components'

class PersonalView extends Component {

  
  render(){
    return (
      <PersonalWrapper>
        <Name>{this.props.firstName} {this.props.lastName}</Name>
        <ContactWrapper>
          <PhoneNumber>{this.props.phone}</PhoneNumber>  
          <Email> {this.props.email}</Email>
        </ContactWrapper>
        <Website> {this.props.website} </Website>
      </PersonalWrapper>
    )
  }
}

const PersonalWrapper = styled.div`
  margin: 0;
`
const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 0.5rem;
`
const ContactWrapper = styled.div`
  display: inline-block;
  margin: 0;
`

const PhoneNumber = styled.div`
  font-size: 12px;
`

const Email = styled.div`
  font-size: 12px;
`
const Website = styled.div`
  font-size: 11px;
  font-style: italic;
`

export default PersonalView
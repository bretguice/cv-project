import React from 'react'
import styled from 'styled-components'

const PersonalView = ({ personal }) => {
  return (
    <PersonalWrapper>
      <Name>{personal.firstName} {personal.lastName}</Name>
      <ContactWrapper>
        <PhoneNumber>{personal.phone}</PhoneNumber>  
        <Email> {personal.email}</Email>
      </ContactWrapper>
      <Website> {personal.website} </Website>
    </PersonalWrapper>
  )
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
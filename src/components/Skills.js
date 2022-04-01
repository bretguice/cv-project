import React, { Component } from 'react'
import styled from 'styled-components'

export class Skills extends Component {
  render() {
    return (
      <SkillsDiv>
        <h3>Skills</h3>
        <form onSubmit={this.props.onSubmit}>
          <SkillInput >
          <StyledInput 
          value={this.props.skillName}
          onChange={this.props.onChange}
          />
          <AddButton>Add</AddButton>
          </SkillInput>
        </form>
      </SkillsDiv>
    )
  }
}

export default Skills

const SkillsDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
float: left;
`

const StyledInput = styled.input`
float: left;
width: 50%;
border-radius: 5px;
margin-bottom: 2px;
`
const AddButton = styled.button`
height: 2rem;
width: 4rem;
margin-right: 5px;

`

const SkillInput = styled.div`
display: flex;
width: 100%;
flex-direction: column;
vertical-align: middle;
`
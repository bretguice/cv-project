import React from 'react'
import styled from 'styled-components'

const Skills = ({
  skill,
  onAdd,
  onChange
}) => {
  return (
    <SkillsDiv>
      <h3>Skills</h3>
      <form onClick={onAdd}>
        <SkillInput >
        <StyledInput 
        value={skill.skillName}
        onChange={onChange}
        />
        <AddButton>Add</AddButton>
        </SkillInput>
      </form>
    </SkillsDiv>
  )
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
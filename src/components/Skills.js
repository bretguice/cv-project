import React from 'react'
import styled from 'styled-components'
import SkillItem from './SkillItem'

const Skills = ({
  skill,
  onAdd,
  onChange,
  onDelete
}) => {

  const skillList = skill.map((skillItem) => (
    <SkillItem 
    key={skillItem.id}
    id={skillItem.id}
    skill={skillItem}
    onChange={onChange}
    onDelete={onDelete}
    ></SkillItem>
  )); 
  
  return (
    <SkillsDiv>
      <h3>Skills</h3>
      {skillList}
      <ButtonDiv>
      <AddButton onClick={onAdd}> Add Skill </AddButton>
      </ButtonDiv>
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


const AddButton = styled.button`
height: 2rem;
width: 4rem;
margin-right: 5px;

`


const ButtonDiv = styled.div`
align-self: flex-end;

`
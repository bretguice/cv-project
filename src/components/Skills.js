import React from 'react'
import styled from 'styled-components'
import SkillItem from './SkillItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

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
      <HeaderDiv>
      <SkillHeader>Skills</SkillHeader>
      <FontAwesomeIcon icon={faCirclePlus} onClick={onAdd} fontSize='20px'  style={{display: "inline", cursor: "pointer", margin: '0 0 0 1rem', verticalAlign: 'middle'}} />
      </HeaderDiv>
      {skillList}
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

const HeaderDiv = styled.div`
display: inline;
`
const SkillHeader = styled.h3`
display: inline;
vertical-align: middle;
`
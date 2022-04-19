import React from 'react'
import styled from 'styled-components'

const SkillsView = ({
  skill,
  skillList
}) => {

  return (
    <SpecialSkills>
      <HeaderWrapper>
        <SkillsHeader>Skills</SkillsHeader>
      </HeaderWrapper>
      <SkillList>
      {skillList.map((skill) => (
        <div key={skill.id}>
        <SkillItem >{skill.text}</SkillItem>
        </div>
      ))}
      </SkillList>
    </SpecialSkills>
  )
}

export default SkillsView

const SpecialSkills = styled.div`
display: flex;
margin: 0;
flex-direction: column;
`

const SkillsHeader = styled.h3`
float: left;
margin: 0;

`
const SkillList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

const SkillItem = styled.li`
float: left;
margin-right: 15px;
font-size: 9px;
`
const HeaderWrapper = styled.div`
display: flex;
width: 100%;
`
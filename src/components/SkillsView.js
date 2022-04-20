import React from 'react'
import styled from 'styled-components'

const SkillsView = ({
  skill,
  
}) => {
  const skillList = skill.map((skillItem) => (
    <SkillList key={skillItem.id}>
      <SkillItem >{skillItem.skillName}</SkillItem>
    </SkillList>

  ))

  return (
    <SpecialSkills>
      <HeaderWrapper>
        <SkillsHeader>Skills</SkillsHeader>
      </HeaderWrapper>
      {skillList}
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
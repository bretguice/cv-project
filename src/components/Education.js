import React from 'react'
import styled from 'styled-components'
import School from './School'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const Education = ({
  education,
  onAdd,
  onChange,
  onDelete
}) => {

  const schools = education.map((school) => (
    <School 
    key={school.id}
    id={school.id}
    school={school}
    onChange={onChange}
    onDelete={onDelete}
    ></School>
  )); 
  
  return (
    <EducationDiv>
      <HeaderDiv>
      <EducationHeader>Education</EducationHeader>
      <FontAwesomeIcon icon={faCirclePlus} onClick={onAdd} fontSize='20px'  style={{display: "inline", cursor: "pointer", margin: '0 0 0 1rem', verticalAlign: 'middle'}} />

      </HeaderDiv>
      {schools}
    </EducationDiv>
  )
}

export default Education

const EducationDiv = styled.div`
display: flex;
flex-direction: column;
float: left;
width: 100%;

`
const HeaderDiv = styled.div`
display: inline;
`
const EducationHeader = styled.h3`
display: inline;
vertical-align: middle;
`
import React from 'react'
import Personal from './Personal'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Skills from './Skills'
import styled from 'styled-components'

const Input = ({
  cv,
  onChangePersonal,
  onChangeEducation,
  onChangeExperience,
  onChangeSkill,
  onAddEducation,
  onAddExperience,
  onAddSkill,
  onDeleteEducation,
  onDeleteExperience,
  onDeleteSkill,
  onPrint,
  onMyCv
}) => {

  return (
    <InputDiv>
        <Personal 
          onChange={onChangePersonal}
          personal={cv.personal}
        />
        <Education 
          onChange={onChangeEducation}
          onAdd={onAddEducation}
          education={cv.education}
          onDelete={onDeleteEducation}
        />
        <WorkExperience 
          onChange={onChangeExperience}
          onAdd={onAddExperience}
          experience={cv.experience}
          onDelete={onDeleteExperience}
        />

        <Skills 
          onChange={onChangeSkill}
          onAdd={onAddSkill}
          onDelete={onDeleteSkill}
          skill={cv.skill}
        />
        <PrintButton onClick={onPrint}>Print</PrintButton>
        <SampleButton onClick={onMyCv}>Load My CV</SampleButton>
    </InputDiv>
  )}


export default Input

const InputDiv = styled.div`
background-color: aliceblue;
padding: 1rem;
box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px ;
`

const PrintButton = styled.button`
background-color: lightgreen;
color: black;
cursor: pointer;
width: 6rem
`

const SampleButton = styled.button`
background-color: lightcoral;
color: white;
width: 6rem;
margin-left: 0.5rem;
cursor: pointer;
`
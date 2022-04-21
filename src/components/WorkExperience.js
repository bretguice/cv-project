import React from 'react'
import styled from 'styled-components'
import Job from './Job'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const WorkExperience = ({
  experience,
  onAdd,
  onChange,
  onDelete, 
}) => {

  const jobs = experience.map((job) => (
    <Job 
    key={job.id}
    id={job.id}
    job={job}
    onChange={onChange}
    onDelete={onDelete}
    ></Job>
  )); 

  return (
    <ExperienceDiv>
      <HeaderDiv>
      <ExperienceHeader>Experience</ExperienceHeader>
      <FontAwesomeIcon icon={faCirclePlus} onClick={onAdd} fontSize='20px'  style={{display: "inline", cursor: "pointer", margin: '0 0 0 1rem', verticalAlign: 'middle'}} />
      </HeaderDiv>
      {jobs}
    </ExperienceDiv>
  )
}

export default WorkExperience

const ExperienceDiv = styled.div`
display: flex;
flex-direction: column;
float: left;
width: 100%;
`

const HeaderDiv = styled.div`
display: inline;
`
const ExperienceHeader = styled.h3`
display: inline;
vertical-align: middle;
`
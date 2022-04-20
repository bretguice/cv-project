import React from 'react'
import styled from 'styled-components'
import Job from './Job'

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
      <h3>Experience</h3>
      {jobs}
      <ButtonDiv>
      <AddButton onClick={onAdd}> Add Experience </AddButton>
      </ButtonDiv>
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
const AddButton = styled.button`
height: 2rem;
width: 4rem;
margin-right: 5px;
`

const ButtonDiv = styled.div`
align-self: flex-end;

`

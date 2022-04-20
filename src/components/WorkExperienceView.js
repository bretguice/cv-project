import React from 'react'
import styled from 'styled-components'

const WorkExperienceView = ({ experience }) => {

  const jobs = experience.map((job) => (
    <JobWrapper key={job.id}> 
      <ExperienceItem>
        <JobHeader>
          <Job>{job.company}</Job>
          <JobCity>{job.city}</JobCity>
        </JobHeader>
        <JobInfo>
          <JobDetails>
            <JobTitle>{job.jobTitle}</JobTitle>
            <JobDates>{job.startDate} to {job.endDate}</JobDates>
          </JobDetails>
            <JobDescription>{job.jobDescription}</JobDescription>
        </JobInfo> 
      </ExperienceItem>
    </JobWrapper>
  ))
  
  return (
    <JobObject>
      <HeaderWrapper>
        <ExperienceHeader>Experience</ExperienceHeader>
      </HeaderWrapper>
      {jobs}
    </JobObject>
  )
  
}

const JobObject = styled.div`
display: flex;
margin: 0;
flex-direction: column;

`
const HeaderWrapper = styled.div`
display: flex;
width: 100%;
`

const ExperienceHeader = styled.h3`
float: left;
margin: 0;
`
const JobWrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;

`
const JobHeader = styled.div`
display: flex;
flex-wrap: nowrap;

`
const Job = styled.h4`
font-size: 12px;
margin: 0 10px;
`

const JobCity = styled.h5`
font-size: 11.5px;
margin: 0 10px;
`

const JobDetails = styled.div`
display: flex;
margin:0;
`
const JobInfo = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`

const JobTitle = styled.h5`
font-size: 10px;
margin:0 10px;
`

const JobDates = styled.h5`
font-size: 9.5px;
font-style: italic;
margin: 0;

`
const JobDescription = styled.p`
font-size: 9px;
text-align: left;
white-space: pre-line;

`
const ExperienceItem = styled.div`
margin-bottom: 10px
`
export default WorkExperienceView

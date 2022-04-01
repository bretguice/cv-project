import React, { Component } from 'react'
import styled from 'styled-components'

class WorkExperienceView extends Component {
  
  render(){
    return (
      <JobObject>
        <HeaderWrapper>
          <ExperienceHeader>Experience</ExperienceHeader>
        </HeaderWrapper>
        <JobWrapper>
          {this.props.jobs.map((experience) => (
          <ExperienceItem key={experience.id}>
          <JobHeader>
              <Job>{experience.company}</Job>
              <JobCity>{experience.city}</JobCity>
            </JobHeader><JobInfo>
                <JobDetails>
                  <JobTitle>{experience.jobTitle}</JobTitle>
                  <JobDates>{experience.startDate} to {experience.endDate}</JobDates>
                </JobDetails>
                <JobDescription>{experience.jobDescription}</JobDescription>
              </JobInfo> 
              </ExperienceItem>
              ))}
        </JobWrapper>

      </JobObject>
    )
  }
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

`
const ExperienceItem = styled.div`
margin-bottom: 10px
`
export default WorkExperienceView

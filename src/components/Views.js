import React, { Component } from 'react'
import PersonalView from './PersonalView'
import WorkExperienceView from './WorkExperienceView'
import EducationView from './EducationView'
import SkillsView from './SkillsView'
import styled from 'styled-components'

class Views extends Component {
  render(){
    const { cv } = this.props;

  return (
    <>
 
    <ResumePage>
        <PersonalView 
          personal={cv.personal}
        />
        <hr></hr>
        <EducationView 
          education={cv.education}
        />
        <WorkExperienceView 
          experience={cv.experience}
        />
        <SkillsView 
          skill={cv.skill}        
        />
    </ResumePage>
    </>
  )
  }
}

export default Views



const ResumePage = styled.div`

    margin: 2cm;
   
`
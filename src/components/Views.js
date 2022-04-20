import React, { Component } from 'react'
import PersonalView from './PersonalView'
import WorkExperienceView from './WorkExperienceView'
import EducationView from './EducationView'
import SkillsView from './SkillsView'

class Views extends Component {
  render(){
    const { cv } = this.props;

  return (
    <div>
        <PersonalView 
          personal={cv.personal}
        />
        <hr></hr>
        <EducationView 
          education={cv.education}
          schools={cv.schools}
        />
        <WorkExperienceView 
          experience={cv.experience}
          jobs={cv.jobs}
        />
        <SkillsView 
          skill={cv.skill}
          skillList={cv.skillList}
        
        />
    </div>
  )
  }
}

export default Views
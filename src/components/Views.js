import React from 'react'
import PersonalView from './PersonalView'
import WorkExperienceView from './WorkExperienceView'
import EducationView from './EducationView'
import SkillsView from './SkillsView'

const Views =({ cv }) => {

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

export default Views
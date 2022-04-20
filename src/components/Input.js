import React from 'react'
import Personal from './Personal'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Skills from './Skills'

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
  onPrint
}) => {

  return (
    <div>
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
        <button onClick={onPrint}>Print</button>
    </div>
  )}


export default Input
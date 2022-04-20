import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Input from './Input'
import Views from './Views'
import uniqid from 'uniqid'
import { EmptyState } from './EmptyState'
import { useReactToPrint } from 'react-to-print'

const CVForm = () => {

  const [cv, setCv] = useState(EmptyState)

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setCv((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        [name]: value,
      }
    }))
  }
  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;
    setCv((prevState) => {
      const newSchool = prevState.education.map((schools) => {
        if(schools.id === id){
          return {...schools, [name]: value}
        }
        return schools
      })
      return {...prevState, education: [...newSchool]}
    })
  }

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    setCv((prevState) => {
      const newJob = prevState.experience.map((jobs) => {
        if(jobs.id === id){
          return {...jobs, [name]: value}
        }
        return jobs
      })
      return {...prevState, experience: [...newJob]}
    })
  } 
  
  const handleChangeSkill = (e, id) => {
    const { name, value } = e.target;
    setCv((prevState) => {
      const newSkill = prevState.skill.map((skills) => {
        if(skills.id === id){
          return {...skills, [name]: value}
        }
        return skills
      })
      return {...prevState, skill: [...newSkill]}
    })
  }

  const handleAddEducation = () => {
    setCv((prevState) =>({
      ...prevState,
      education: [
        ...prevState.education,
        {
        id: uniqid(),
        school: '',
        city: '',
        degree: '',
        startDate: '',
        endDate: '',
        },
      ],
    }))
  }
       
  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
        id: uniqid(),
        company: '',
        city: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        jobDescription: '', 
        },
      ],
    }))
  }

  const handleAddSkill = () => {
    setCv((prevState) => ({
      ...prevState,
      skill: [
        ...prevState.skill,
        {
          id: uniqid(),
          text: '',
        },
      ],
    }))
  }

  const handleDeleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (school) => school.id !== id
      )
      return { ...prevState, education: [...newEducation] }
    })
    
  }
  const handleDeleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (job) => job.id !== id
      )
      return { ...prevState, education: [...newExperience] }
    })
    
  }

  const handleDeleteSkill = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.skill.filter(
        (skill) => skill.id !== id
      )
      return { ...prevState, skill: [...newExperience] }
    })
  }

  const componentRef = useRef();

  const handlePrint = useReactToPrint({ content: ()=> componentRef.current })

  return (
    <CVWrapper>
      <InputWrapper>
        <Input
          cv={cv}
          onChangePersonal={handleChangePersonal} 
          onChangeEducation={handleChangeEducation}
          onChangeExperience={handleChangeExperience}
          onChangeSkill={handleChangeSkill}
          onAddEducation={handleAddEducation}
          onAddExperience={handleAddExperience}
          onAddSkill={handleAddSkill}
          onDeleteEducation={handleDeleteEducation}
          onDeleteExperience={handleDeleteExperience}
          onDeleteSkill={handleDeleteSkill}
          onPrint={handlePrint}
        />
      </InputWrapper>

      <ViewsWrapper>
        <Views 
          cv={cv}
          ref={componentRef}
        />
      </ViewsWrapper>
    </CVWrapper>
  )
}

export default CVForm

const CVWrapper = styled.div`
  display: flex;
  width: 100%;
  
  `;

  const InputWrapper = styled.div`
    float: left;
    height: 100vh;
    width: 55%;
    overflow: auto;
    padding: 0 2rem;

  `;

  const ViewsWrapper = styled.div`
    float: right;
    height: 100vh;
    width: 45%;
    overflow: auto;
    padding: 0 2rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `
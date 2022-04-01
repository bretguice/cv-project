import React, { Component } from 'react'
import styled from 'styled-components'
import Input from './Input'
import Views from './Views'
import uniqid from 'uniqid'

class CVForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
        firstName: 'Bret',
        lastName: 'Guice',
        email: 'bret.guice@gmail.com',
        phone: '(318) 243-0575',
        website: 'github.com/bretguice',
    
       experience: {
         id: uniqid(),
         company: '',
         city: '',
         jobTitle: '',
         startDate: '',
         endDate: '',
         jobDescription: '' 
       },
       education: {
         id: uniqid(),
         school: '',
         city: '',
         degree: '',
         startDate: '',
         endDate: '',
       },
       skill: {
         id: uniqid(),
         text: '',
       },
       jobs: [],
       schools: [],
       skillList: [],
    }
  };

  handleChangePersonal = (e) => {
    this.setState ({  
        [e.target.name]: e.target.value,
      })
    }

    handleChangeEducation = (e) => {
      this.setState((prevState) => ({
        ...prevState,
        education: {
          ...prevState.education,
          [e.target.name]: e.target.value,
        }
      }))
    }

    handleSubmitEducation = (e) => {
      e.preventDefault();
      this.setState({
        schools: this.state.schools.concat(this.state.education),
        education: {
          id: uniqid(),
          school: '',
          city: '',
          degree: '',
          startDate: '',
          endDate: '',
        }
      })
      console.log(this.state.jobs);
    }

    handleChangeExperience = (e) => {
      this.setState((prevState) => ({
        ...prevState,
        experience: {
          ...prevState.experience,
          [e.target.name]: e.target.value
        }
      }))
    }

    handleSubmitExperience = (e) => {
      e.preventDefault();
      this.setState({
        jobs: this.state.jobs.concat(this.state.experience),
        experience: {
          id: uniqid(),
          company: '',
          city: '',
          jobTitle: '',
          startDate: '',
          endDate: '',
          jobDescription: '',
        }
        
      })
      console.log(this.state.jobs)
    }

    handleChangeSkill = (e) => {
      this.setState({
        skill: {
          text: e.target.value
        }
      })
    }

    handleSubmitSkill = (e) => {
      e.preventDefault();
      this.setState({
        skillList: this.state.skillList.concat(this.state.skill),
        id: uniqid(),
        text: ''
      })
    }

  render() {
    return (
      <CVWrapper>
        <InputWrapper>
          <Input
            onChangePersonal={this.handleChangePersonal} 
            onChangeEducation={this.handleChangeEducation}
            onSubmitEducation={this.handleSubmitEducation}
            onChangeExperience={this.handleChangeExperience}
            onSubmitExperience={this.handleSubmitExperience}
            onChangeSkill={this.handleChangeSkill}
            onSubmitSkill={this.handleSubmitSkill}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            website={this.state.website}
            school={this.state.education.school}
            schoolCity={this.state.education.city}
            degree={this.state.education.degree}
            schoolStart={this.state.education.startDate}
            schoolEnd={this.state.education.endDate}
            job={this.state.experience.company}
            jobCity={this.state.experience.city}
            jobTitle={this.state.experience.jobTitle}
            jobStart={this.state.experience.startDate}
            jobEnd={this.state.experience.endDate}
            jobDescription={this.state.experience.jobDescription}
            schools={this.state.schools}
            jobs={this.state.jobs}
            skill={this.state.skill}
            skillName={this.state.skill.text}
            skillList={this.state.skillList}
          />
        </InputWrapper>

        <ViewsWrapper>
          <Views 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            website={this.state.website}
            school={this.state.education.school}
            schoolCity={this.state.education.city}
            degree={this.state.education.degree}
            schoolStart={this.state.education.startDate}
            schoolEnd={this.state.education.endDate}
            company={this.state.experience.company}
            jobCity={this.state.experience.city}
            jobTitle={this.state.experience.jobTitle}
            jobStart={this.state.experience.startDate}
            jobEnd={this.state.experience.endDate}
            jobDescription={this.state.experience.jobDescription}
            schools={this.state.schools}
            jobs={this.state.jobs}
            skill={this.state.skill}
            skillName={this.state.skill.text}
            skillList={this.state.skillList}
          />
        </ViewsWrapper>
      </CVWrapper>
    )
  }
};

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
  `;



export default CVForm
import React, { Component } from 'react'
import Personal from './Personal'
import WorkExperience from './WorkExperience'
import Education from './Education'
import Skills from './Skills'

class Input extends Component {


  render(){
  return (
    <div>
        <Personal 
          onChange={this.props.onChangePersonal}
          firstname={this.props.firstName}
          lastName={this.props.lastName}
          email={this.props.email}
          phone={this.props.phone}
          website={this.props.website}
        />
        <WorkExperience 
          onChange={this.props.onChangeExperience}
          onSubmit={this.props.onSubmitExperience}
          job={this.props.company}
          jobCity={this.props.jobCity}
          jobTitle={this.props.jobTitle}
          jobDescription={this.props.jobDescription}
          jobStart={this.props.jobStart}
          jobEnd={this.props.jobEnd}
        />
        <Education 
          onChange={this.props.onChangeEducation}
          onSubmit={this.props.onSubmitEducation}
          school={this.props.school}
          schoolCity={this.props.schoolCity}
          degree={this.props.degree}
          schoolStart={this.props.schoolStart}
          schoolEnd={this.props.schoolEnd}
        />
        <Skills 
          onChange={this.props.onChangeSkill}
          onSubmit={this.props.onSubmitSkill}
          skillsList={this.props.skillsList}
          skill={this.props.skill}
          skillName={this.props.skillName}
        />
    </div>
  )}
}

export default Input
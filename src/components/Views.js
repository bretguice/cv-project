import React, { Component } from 'react'
import PersonalView from './PersonalView'
import WorkExperienceView from './WorkExperienceView'
import EducationView from './EducationView'
import SkillsView from './SkillsView'

class Views extends Component {
 
  render() {
    return (
      <div>
          <PersonalView 
            firstName={this.props.firstName}
            lastName={this.props.lastName}
            email={this.props.email}
            phone={this.props.phone}
            website={this.props.website}
          />
          <WorkExperienceView 
            job={this.props.company}
            jobCity={this.props.jobCity}
            jobTitle={this.props.jobTitle}
            jobDescription={this.props.jobDescription}
            jobStart={this.props.jobStart}
            jobEnd={this.props.jobEnd}
          />
          <EducationView 
            school={this.props.school}
            schoolCity={this.props.schoolCity}
            degree={this.props.degree}
            schoolStart={this.props.schoolStart}
            schoolEnd={this.props.schoolEnd}
          />
          <SkillsView 
            skill={this.props.skill}
            skillsList={this.props.skillsList}
            skillName={this.props.skillName}
          
          />
      </div>
    )
  }
}

export default Views
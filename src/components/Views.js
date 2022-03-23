import React, { Component } from 'react'
import PersonalView from './PersonalView'
import WorkExperienceView from './WorkExperienceView'
import EducationView from './EducationView'

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
          <WorkExperienceView />
          <EducationView />
      </div>
    )
  }
}

export default Views
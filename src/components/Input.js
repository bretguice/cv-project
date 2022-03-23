import React, { Component } from 'react'
import Personal from './Personal'
import WorkExperience from './WorkExperience'
import Education from './Education'

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
        <WorkExperience />
        <Education />
    </div>
  )}
}

export default Input
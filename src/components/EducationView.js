import React, { Component } from 'react'

 class EducationView extends Component {
  
  render(){
    return (
      <div>
        <div>EducationView</div>
        <div>My school is {this.props.school} in {this.props.schoolCity}</div>
        <div>My degree is {this.props.degree}</div>
        <div>I started {this.props.schoolStart} and finished {this.props.schoolEnd}</div>
      </div>
    )
  }
}

export default EducationView

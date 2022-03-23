import React, { Component } from 'react'
import uniqid from 'uniqid'

class WorkExperience extends Component {

  handleChange = (e) => {
    this.setState({
        workExperience: {
          [e.target.name]: e.target.value,
      }

    })
  }

  handleSubmitJob = (e) => {
    e.preventDefault();
    const jobs = [...this.state.jobs]
    console.log(jobs)
    this.setState({
      jobs: jobs(this.state.workExperience),
      workExperience: {
        company: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        jobDescription: '',
        id: uniqid()
      },
    });
  }

  render(){
    return (
      <>
      <h2>WorkExperience</h2>
      <form onSubmit={this.handleSubmitJob}>
        <input name="company" placeholder="Company"/>
        <input name="jobTitle" placeholder='Job Title'/>
        <div>
          <label>Start Date: </label>
          <input name="startDate" type='date' placeholder='Start Date' />
        </div>
        <div>
          <label>End Date: </label>
          <input name="endDate" type='date' placeholder='Start Date' />
        </div>
        <textarea name="jobDescription" placeholder='Job Description'/>
        <button> Submit </button>
      </form>
      </>
    )
  }
}

export default WorkExperience
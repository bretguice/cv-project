import React, { Component } from 'react'

class WorkExperience extends Component {

  render(){
    return (
      <>
      <h2>WorkExperience</h2>
      <form onSubmit={this.props.onSubmit}>
        <input 
          name="company" 
          placeholder="Company"
          type="text"
          onChange={this.props.onChange}
          value={this.props.job}
          />
        <input 
          name="jobTitle" 
          placeholder='Job Title'
          onChange={this.props.onChange}  
        />
        <input 
          name="city"
          placeholder='City'
          onChange={this.props.onChange}
        />
        <div>
          <label>Start Date: </label>
          <input 
            name="startDate" 
            type='date' 
            placeholder='Start Date' 
            onChange={this.props.onChange}  
          />
        </div>
        <div>
          <label>End Date: </label>
          <input 
            name="endDate" 
            type='date' 
            placeholder='Start Date' 
            onChange={this.props.onChange}  
          />
        </div>
        <textarea 
          name="jobDescription" 
          placeholder='Job Description'
          onChange={this.props.onChange}  
        />
        <button> Submit </button>
      </form>
      </>
    )
  }
}

export default WorkExperience
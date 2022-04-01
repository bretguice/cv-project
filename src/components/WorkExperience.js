import React, { Component } from 'react'
import styled from 'styled-components'

class WorkExperience extends Component {

  render(){
    return (
      <ExperienceDiv>
      <h3>Experience</h3>
      <form onSubmit={this.props.onSubmit}>
        <StyledInput 
          name="company" 
          placeholder="Company"
          type="text"
          onChange={this.props.onChange}
          value={this.props.job}
          />
        <StyledInput 
          name="jobTitle" 
          placeholder='Job Title'
          onChange={this.props.onChange}  
        />
        <StyledInput 
          name="city"
          placeholder='City'
          onChange={this.props.onChange}
        />
        <DateDiv>
          <DateInput 
            name="startDate" 
            placeholder='Start Date (e.g. April 2022)' 
            onChange={this.props.onChange}  
          />
        </DateDiv>
        <DateDiv>
          <DateInput 
            name="endDate" 
            placeholder='Start Date (e.g. April 2022 or Present)' 
            onChange={this.props.onChange}  
          />
        </DateDiv>
        <JobDescription 
          name="jobDescription" 
          placeholder='Job Description'
          onChange={this.props.onChange}  
        />
        <AddButton type="submit" > Add </AddButton>
        <DeleteButton> Delete </DeleteButton>
      </form>
      </ExperienceDiv>
    )
  }
}

export default WorkExperience

const ExperienceDiv = styled.div`
display: flex;
flex-direction: column;
float: left;
width: 100%;
`

const StyledInput = styled.input`
float: left;
width: 75%;
border-radius: 5px;
margin-bottom: 2px;
`

const DateDiv = styled.div`
width: 100%;
float: left;
`


const DateInput = styled.input`
float:left;
width: 50%;
border-radius: 5px;
`

const AddButton = styled.button`
height: 2rem;
width: 4rem;
margin-right: 5px;
`
const JobDescription = styled.textarea`
float: left;
width: 75%;
border-radius: 5px;
resize: none;
`

const DeleteButton = styled.button`
background-color: red;
color: white;
height: 2rem;
width: 4rem;
`
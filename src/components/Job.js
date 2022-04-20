import React from 'react'
import styled from 'styled-components';

const Job = ({
    id, 
    job,
    onChange,
    onDelete
}) => {
  return (
      <>
        <StyledInput 
        name="company" 
        placeholder="Company"
        onChange={(e) => onChange(e, id)}
        value={job.company}
        />
        <StyledInput 
        name="jobTitle" 
        placeholder='Job Title'
        onChange={(e) => onChange(e, id)}  
        value={job.jobTitle}
        />
        <StyledInput 
        name="city"
        placeholder='City'
        onChange={(e) => onChange(e, id)}
        value={job.city}
        />
        <DateDiv>
            <DateInput 
            name="startDate" 
            placeholder='Start Date (e.g. April 2022)' 
            onChange={(e) => onChange(e, id)}  
            value={job.startDate}
            />
        </DateDiv>
        <DateDiv>
            <DateInput 
            name="endDate" 
            placeholder='Start Date (e.g. April 2022 or Present)' 
            onChange={(e) => onChange(e, id)}  
            value={job.endDate}
            />
        </DateDiv>
        <JobDescription 
        name="jobDescription" 
        placeholder='Job Description'
        onChange={(e) => onChange(e, id)}  
        value={job.jobDescription}
        />
        <DeleteButton onClick={() => onDelete(id)}> Delete Job </DeleteButton>
  </>
  )
}

export default Job;


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


const JobDescription = styled.textarea`
float: left;
white-space: pre-line;
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

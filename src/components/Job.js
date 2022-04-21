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
        <CityInput 
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
            placeholder='End Date (e.g. April 2022 or Present)' 
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
margin: 0 0.25rem 0.25rem 0.25rem;
`

const DateDiv = styled.div`
width: 100%;
float: left;
`


const DateInput = styled.input`
float:left;
width: 50%;
border-radius: 5px;
margin: 0 0.25rem 0.25rem 0.25rem;
`


const JobDescription = styled.textarea`
float: left;
white-space: pre-line;
width: 75%;
border-radius: 5px;
resize: vertical;
margin: 0 0.25rem 0.25rem 0.25rem;
`



const DeleteButton = styled.button`
background-color: rgb(255,64,64);
color: white;
height: 1.4rem;
width: 7rem;
border-radius: 5px;
margin-bottom: 0.25rem;
cursor: pointer;
`
const CityInput = styled.input`
float: left;
width: 30%;
border-radius: 5px;
margin-bottom: 2px;
margin: 0 0.25rem 0.25rem 0.25rem;
`
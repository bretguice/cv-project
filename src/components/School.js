import React from 'react'
import styled from 'styled-components';

const School = ({
    id,
    school,
    onChange,
    onDelete
}) => {
    
  return (
    <>
        <StyledInput 
        name="school" 
        placeholder="School"
        onChange={(e) => onChange(e, id)}
        value={school.school}
        />
        <StyledInput 
        name="city"
        placeholder='City'
        onChange={(e) => onChange(e, id)}
        value={school.city}
        />
        <StyledInput 
        name="degree" 
        placeholder='Degree'
        onChange={(e) => onChange(e, id)}
        value={school.degree}
        />
        <DateDiv>
        <DateInput 
            name="startDate" 
            placeholder='Start Date (e.g. April 2022)' 
            onChange={(e) => onChange(e, id)}
            value={school.startDate}
        />
        </DateDiv>
        <DateDiv>
        <DateInput 
            name="endDate" 
            placeholder='Start Date (e.g. April 2022)' 
            onChange={(e) => onChange(e, id)}
            value={school.endDate}
        />
        </DateDiv>
        <DeleteButton onClick={() => onDelete(id)}> Delete School </DeleteButton>
    </>
  )
}

export default School;

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
const DeleteButton = styled.button`
background-color: red;
color: white;
height: 2rem;
width: 4rem;
`

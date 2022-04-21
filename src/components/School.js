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
        <SchoolInput 
        name="school" 
        placeholder="School"
        onChange={(e) => onChange(e, id)}
        value={school.school}
        />
        <CityInput 
        name="city"
        placeholder='City'
        onChange={(e) => onChange(e, id)}
        value={school.city}
        />
        <SchoolInput 
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
            placeholder='End Date (e.g. April 2022)' 
            onChange={(e) => onChange(e, id)}
            value={school.endDate}
        />
        </DateDiv>
        <DeleteButton onClick={() => onDelete(id)}> Delete School </DeleteButton>
    </>
  )
}

export default School;


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
margin: 0 0.25rem 0.25rem 0.25rem;
`
const SchoolInput = styled.input`
float: left;
width: 40%;
border-radius: 5px;
margin: 0 0.25rem 0.25rem 0.25rem;
`
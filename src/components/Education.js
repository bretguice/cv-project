import React from 'react'
import styled from 'styled-components'
import School from './School'

const Education = ({
education,
onChange,
onAdd, 
onDelete,
id
}) => {
  const schools = education.map((school) => (
    <School 
    key={school.id}
    id={school.id}
    school={school}
    onChange={onChange}
    onDelete={onDelete}
    ></School>
  )); 
  
  return (
    <EducationDiv>
    <h3>Education</h3>
    
      {schools}
      <ButtonDiv>
      <AddButton onClick={onAdd}> Add </AddButton>
      </ButtonDiv>


    </EducationDiv>
  )
}

export default Education

const EducationDiv = styled.div`
display: flex;
flex-direction: column;
float: left;
width: 100%;

`


const AddButton = styled.button`
height: 2rem;
width: 4rem;
margin-right: 5px;

`

const ButtonDiv = styled.div`
align-self: flex-end;

`
import React from 'react'
import styled from 'styled-components';

const SkillItem = ({
    id, 
    skill,
    onChange,
    onDelete
}) => {
  return (
      <>
      <StyledInput 
        name='skillName'
        placeholder='Skill'
        onChange={(e) => onChange(e, id)}
        value={skill.skillName}
        />
        <DeleteButton onClick={() => onDelete(id)}> Delete Skill </DeleteButton>
      </>
      )
    }
    
    export default SkillItem;

const StyledInput = styled.input`
float: left;
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


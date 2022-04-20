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
        placeholder='skill'
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
margin-bottom: 2px;
`
    

const DeleteButton = styled.button`
background-color: red;
color: white;
height: 2rem;
width: 4rem;
`

import React, {Component} from 'react'
import styled from 'styled-components'

class Education extends Component {
  
  render(){
    return (
      <EducationDiv>
      <h3>Education</h3>
      <form onSubmit={this.props.onSubmit}>
        <StyledInput 
          name="school" 
          placeholder="School"
          onChange={this.props.onChange}
        />
        <StyledInput 
          name="city"
          placeholder='City'
          onChange={this.props.onChange}
        />
        <StyledInput 
          name="degree" 
          placeholder='Degree'
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
            placeholder='Start Date (e.g. April 2022)' 
            onChange={this.props.onChange}
          />
        </DateDiv>
        <ButtonDiv>
        <AddButton type='submit'> Add </AddButton>
        <DeleteButton > Delete </DeleteButton>
        </ButtonDiv>
        </form>

      </EducationDiv>
    )
  }
}

export default Education

const EducationDiv = styled.div`
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
const DeleteButton = styled.button`
background-color: red;
color: white;
height: 2rem;
width: 4rem;
`
const ButtonDiv = styled.div`
align-self: flex-end;

`
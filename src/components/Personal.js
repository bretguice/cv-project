import React from 'react'
import styled from 'styled-components'

const Personal = ({
    personal,
    onChange
}) => {


    return (
        <PersonalDiv>
            <h3 >Personal Information</h3>
            <form >
                <StyledInput  
                        name="firstName" 
                        onChange={onChange} 
                        placeholder="First Name" 
                        value={personal.firstName}
                /> 
                <StyledInput 
                        name="lastName" 
                        onChange={onChange} 
                        placeholder="Last Name" 
                        value={personal.lastName}
                />
                <StyledInput  
                        name="email" 
                        onChange={onChange} 
                        placeholder="E-mail" 
                        value={personal.email}
                />
                <StyledInput  
                        name="phone" 
                        onChange={onChange} 
                        placeholder="Phone Number" 
                        value={personal.phone}
                />
                <StyledInput  
                        name="website" 
                        onChange={onChange} 
                        placeholder="Website" 
                        value={personal.website}
                />
            </form>


        </PersonalDiv>
    )

}

export default Personal;

const PersonalDiv = styled.div`
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
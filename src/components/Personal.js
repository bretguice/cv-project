import React from 'react'
import styled from 'styled-components'

const Personal = ({
    personal,
    onChange
}) => {


    return (
        <PersonalDiv>
            <h3 > Personal </h3>
            <form >
                <NameInput  
                        name="firstName" 
                        onChange={onChange} 
                        placeholder="First Name" 
                        value={personal.firstName}
                /> 
                <NameInput 
                        name="lastName" 
                        onChange={onChange} 
                        placeholder="Last Name" 
                        value={personal.lastName}
                />
                <ContactInput  
                        name="email" 
                        onChange={onChange} 
                        placeholder="E-mail" 
                        value={personal.email}
                />
                <ContactInput  
                        name="phone" 
                        onChange={onChange} 
                        placeholder="Phone Number" 
                        value={personal.phone}
                />
                <ContactInput  
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
background-color: aliceblue;
`

const NameInput = styled.input`
float: left;
width: 40%;
border-radius: 5px;
margin-bottom: 2px;
margin: 0.25rem;  
`
const ContactInput = styled.input`
float: left;
width: 40%;
border-radius: 5px;
margin: 0 0.25rem 0.25rem 0.25rem;
`
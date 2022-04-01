import React, { Component } from 'react'
import styled from 'styled-components'

class Personal extends Component {


    render(){
        return (
            <PersonalDiv>
                <h3 >Personal Information</h3>
                <form >
                    <StyledInput  
                            name="firstName" 
                            onChange={this.props.onChange} 
                            placeholder="First Name" 
                    /> 
                    <StyledInput 
                            name="lastName" 
                            onChange={this.props.onChange} 
                            placeholder="Last Name" 
                    />
                    <StyledInput  
                            name="email" 
                            onChange={this.props.onChange} 
                            placeholder="E-mail" 
                    />
                    <StyledInput  
                            name="phone" 
                            onChange={this.props.onChange} 
                            placeholder="Phone Number" 
                    />
                    <StyledInput  
                            name="website" 
                            onChange={this.props.onChange} 
                            placeholder="Website" 
                    />
                </form>


            </PersonalDiv>
        )
    }
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
import React, { Component } from 'react'
import uniqid from 'uniqid'

class Personal extends Component {
    constructor(){
        super()  

        this.state = {
            firstName:{
                text: '',
                id: uniqid(),
            },
            lastName:{
                text: '',
                id: uniqid(),
            },
            email:{
                text: '',
                id: uniqid(),
            } ,
            phone:{
                text: '',
                id: uniqid(),
            },
            website:{
                text: '',
                id: uniqid(),
            }

        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: {
                text: e.target.value,
                id: this.state.firstName.id
            }

        })
    }
   

    render(){
        return (
            <div>
                <h1 >Personal Information</h1>
                <form onSubmit={this.onSubmitPersonal}>
                    <input type="text" name="firstName" onChange={this.handleChange} placeholder="First Name" /> 
                    <input type="text" name="lastName" onChange={this.handleChange} placeholder="Last Name" />
                    <input type="email" name="email" onChange={this.handleChange} placeholder="E-mail" />
                    <input type="tel" name="phone" onChange={this.handleChange} placeholder="Phone Number" />
                    <input type="url" name="website" onChange={this.handleChange} placeholder="Website" />
                </form>
                <div >My name is {this.state.firstName.text} {this.state.lastName.text}</div>
                <div>My Email is {this.state.email.text}</div>
                <div>Call me at {this.state.phone.text}</div>
                <div> Visit my website {this.state.website.text}</div>
            </div>
        )
    }
}

export default Personal;
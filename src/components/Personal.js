import React, { Component } from 'react'

class Personal extends Component {


    render(){
        return (
            <div>
                <h2 >Personal Information</h2>
                <form >
                    <input type="text" 
                            name="firstName" 
                            onChange={this.props.onChange} 
                            placeholder="First Name" 
                    /> 
                    <input type="text" 
                            name="lastName" 
                            onChange={this.props.onChange} 
                            placeholder="Last Name" 
                    />
                    <input type="email" 
                            name="email" 
                            onChange={this.props.onChange} 
                            placeholder="E-mail" 
                    />
                    <input type="tel" 
                            name="phone" 
                            onChange={this.props.onChange} 
                            placeholder="Phone Number" 
                    />
                    <input type="url" 
                            name="website" 
                            onChange={this.props.onChange} 
                            placeholder="Website" 
                    />
                </form>


            </div>
        )
    }
}

export default Personal;
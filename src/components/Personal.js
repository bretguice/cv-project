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
                            firstName={this.props.firstname}
                    /> 
                    <input type="text" 
                            name="lastName" 
                            onChange={this.props.onChange} 
                            placeholder="Last Name" 
                            lastName={this.props.lastName}
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
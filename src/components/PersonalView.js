import React, { Component } from 'react'

class PersonalView extends Component {

  
  render(){
    return (
      <div>
        <div>PersonalView</div>
        <div>My name is {this.props.firstName} {this.props.lastName}</div>
        <div>My Email is {this.props.email}</div>
        <div>Call me at {this.props.phone}</div>
        <div> Visit my website {this.props.website} </div>
      </div>
    )
  }
}

export default PersonalView
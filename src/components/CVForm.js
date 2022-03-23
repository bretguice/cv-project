import React, { Component } from 'react'
import Input from './Input'
import Views from './Views'
import uniqid from 'uniqid'

class CVForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
        firstName: 'Test',
        lastName: 'LastName',
        email: 'email@email.com',
        phone: '999-999-9999',
        website: 'www.bretguice.com',
    
       workExperience: {
         id: uniqid(),
         company: '',
         city: '',
         jobTitle: '',
         startDate: '',
         endDate: '',
         jobDescription: '',
       },
       education: {
         id: uniqid(),
         school: '',
         city: '',
         degree: '',
         startDate: '',
         endDate: '',
       },
       skill: {
         id: uniqid(),
         text: '',
       },
       jobs: [],
       schools: [],
       skills: [],
    }
  };

  handleChangePersonal = (e) => {
    this.setState ({  
        [e.target.name]: e.target.value,

      })

    }

  render() {
    return (
      <div>
          <Input
            onChangePersonal={this.handleChangePersonal} 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            website={this.state.website}
          />
          <Views 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            website={this.state.website}
          />
      </div>
    )
  }
}

export default CVForm
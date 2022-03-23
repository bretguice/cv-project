import React, {Component} from 'react'

class Education extends Component {

  handleChange = (e) => {
    this.setState({
        education: {
          [e.target.name]: e.target.value,
      }

    })
  }

  render(){
    return (
      <>
      <h2>Education</h2>
      <form>
      <input name="school" placeholder="School"/>
        <input name="degree" placeholder='Degree'/>
        <div>
          <label>Start Date: </label>
          <input name="startDate" type='date' placeholder='Start Date' />
        </div>
        <div>
          <label>End Date: </label>
          <input name="endDate" type='date' placeholder='Start Date' />
        </div>
        <button> Submit </button>
        </form>

      </>
    )
  }
}

export default Education
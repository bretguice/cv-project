import React, {Component} from 'react'

class Education extends Component {
  
  render(){
    return (
      <>
      <h2>Education</h2>
      <form onSubmit={this.props.onSubmit}>
        <input 
          name="school" 
          placeholder="School"
          onChange={this.props.onChange}
        />
        <input 
          name="city"
          placeholder='city'
          onChange={this.props.onChange}
        />
        <input 
          name="degree" 
          placeholder='Degree'
          onChange={this.props.onChange}
        />
        <div>
          <label>Start Date: </label>
          <input 
            name="startDate" 
            type='date' 
            placeholder='Start Date' 
            onChange={this.props.onChange}
          />
        </div>
        <div>
          <label>End Date: </label>
          <input 
            name="endDate" 
            type='date' 
            placeholder='Start Date' 
            onChange={this.props.onChange}
          />
        </div>
        <button> Submit </button>
        </form>

      </>
    )
  }
}

export default Education
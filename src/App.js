import { Component } from 'react';
import './App.css';
import Education from './components/Education';
import Personal from './components/Personal'
import WorkExperience from './components/WorkExperience';

class App extends Component {
  constructor(){
    super()

    this.state = {
      personal: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    };
  }

  render(){
    return (
      <div className="App">
        <Personal />
        <WorkExperience />
        <Education />
      </div>
    );
  }
}

export default App;


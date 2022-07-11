import React from 'react';
import CVForm from './components/CVForm';
import styled from 'styled-components'

const App = ()=> {
 
    return (
      <Page className="App">
        <MainHeader> Resume Builder</MainHeader>
        <CVForm   />
      </Page>
    );

}

export default App;

const Page = styled.div`


`

const MainHeader = styled.h1`
background-color: black;
color: white;
margin: 0;
line-height: 4rem;
text-align: center;
font-size: 38px;
`

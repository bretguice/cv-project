import React from 'react'
import styled from 'styled-components'

 const EducationView = ({ education }) => {

  const schools = education.map((school) => (
    <SchoolWrapper key={school.id}>          
      <EducationItem >
        <SchoolInfo >
          <School > {school.school} </School>  
          <SchoolCity > {school.city} </SchoolCity>
        </SchoolInfo>
        <DegreeInfo >
          <Degree >{school.degree}</Degree>
          <DegreeDates>{school.startDate} to {school.endDate}</DegreeDates>
        </DegreeInfo> 
      </EducationItem>       
    </SchoolWrapper>
  ));

    return (
      <EducationObject> 
        <HeaderWrapper>
          <EducationHeader>Education</EducationHeader>
        </HeaderWrapper>
        {schools}
      </EducationObject>
    )
  
}

const EducationObject = styled.div`
display: flex;
margin: 0;
flex-direction: column;
`

const EducationHeader = styled.h3`
  float: left;
  margin: 0;

`
const HeaderWrapper = styled.div`
display: flex;
width: 100%;
`
const SchoolWrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`
const SchoolInfo = styled.div`
display: flex;
flex-wrap: nowrap;

`

const School = styled.h4`
font-size: 12px;
margin: 0 10px;
`

const SchoolCity = styled.h4`
font-size: 11.5px;
font-style: italic;
margin: 0;
`
const DegreeInfo = styled.div`
display: flex;
margin:0;
`
const Degree = styled.h5`
font-size: 10px;
margin:0 10px;
`
const DegreeDates = styled.h5`
font-size: 9.5px;
font-style: italic;
margin: 0;
`

const EducationItem = styled.div`
margin-bottom: 10px;
`

export default EducationView

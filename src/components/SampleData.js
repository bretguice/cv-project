import uniqid from 'uniqid'

export const SampleData = {
    
    personal: {
     firstName: 'Bret',
     lastName: 'Guice',
     email: 'bret.guice@gmail.com',
     phone: '(318) 243-0575',
     website: 'github.com/bretguice',
    },
   experience: {
     id: uniqid(),
     company: '',
     city: '',
     jobTitle: '',
     startDate: '',
     endDate: '',
     jobDescription: '' 
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
   skillList: [],
}
import uniqid from 'uniqid'

export const EmptyState = {
    
    personal: {
     firstName: "",
     lastName: "",
     email: "",
     phone: "",
     website: "",
    },
   experience: [
   {
     id: uniqid(),
     company: "",
     city: "",
     jobTitle: "",
     startDate: "",
     endDate: "",
     jobDescription: "", 
   },
  ],
   education: [ 
   {
     id: uniqid(),
     school: "",
     city: "",
     degree: "",
     startDate: "",
     endDate: "",
   },
  ],
   skill: [
     {
     id: uniqid(),
     skillName: "",
   },
  ],
}

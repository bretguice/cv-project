import uniqid from 'uniqid'

export const SampleData = {
    
    personal: {
     firstName: 'Bret',
     lastName: 'Guice',
     email: 'bret.guice@gmail.com',
     phone: '(318) 243-0575',
     website: 'bretguice.com',
    },
   experience: [
   {
     id: uniqid(),
     company: 'Jacksonville Jaguars',
     city: 'Jacksonville, FL',
     jobTitle: 'Ticket Operations Manager',
     startDate: 'May 2019',
     endDate: 'September 2020',
     jobDescription: "As Manager of Ticket Operations, I assisted the integration of Gator Bowl Sports ticketing into Jacksonville Jaguar/Bold Events. My primary focus was operating all ticket operations of the TaxSlayer Gator Bowl. I enabled special offers, managed ticket inventory, guided the Jacksonville Jaguars sales team and Gator Bowl Sports committee to keep sales channels flowing, and worked closely with the ticket offices for the teams participating in the TaxSlayer Gator Bowl to ensure a smooth gameday for their fans. I assisted the Jacksonville Jaguar ticketing team with planning for the 2019 season. I was available on gamedays to assist at box office and gates with providing exception customer service to fans while helping troubleshoot any ticket issues. I also participated in planning the implementation of 'SafeTix' which was the new NFL standard for how mobile tickets are operated. For the 2020 season I assisted with building the social distancing manifest for the limited capacity season." 
   },
   {
    id: uniqid(),
    company: 'Gator Bowl Sports',
    city: 'Jacksonville, FL',
    jobTitle: 'Director of Membership and Ticketing',
    startDate: 'July 2012',
    endDate: 'April 2019',
    jobDescription: "As Ticket Manager, I managed inventory, created the ecommerce platforms for game tickets and ancillary items, provided weekly reporting on ticket sales, and handled ticket fulfillment.  I also built relationships through ticketmaster, ticket printing vendors, university ticket managers, and bowl ticket managers.  I provided exceptional customer service to all ticket members and single game buyers while assisting each university ticket office with ensuring proper setup and NCAA compliance with ticket operations. \n \n My role expanded in June of 2013 to the Director of Ticket Operations.  While maintaining my responsibilities of the ticket manager, I also oversaw the strategy in relation achieving the $3+ million ticket budget. I built relationships through various partners to help achieve ticket sales goals.  I was responsible for managing Gator Bowl Sports partnerships with Ticketmaster and PrimeSport. I negotiated a contract between Gator Bowl Sports and their exclusive ticket broker partner focused on maintaining secondary market pricing while creating revenue sharing opportunities.  I led the drive to a data driven approach toward lead generation and created the organization’s CRM using Microsoft Dynamics. \n \n  My role expanded in June of 2018 to the Director of Membership and Ticketing.  While maintaining my responsibilities with ticket operations, I also provided membership growth strategy and services.  I worked to implement a plan that saw engagement increase through new initiatives that serviced our membership.  I oversaw the bowl president’s advisory committee where I determined the membership of the committee, scheduled meetings, and engaged in discussion with any proposed changes.  "
  },
  {
    id: uniqid(),
    company: 'Louisiana Tech University',
    city: 'Ruston, LA',
    jobTitle: 'Ticket Operations Associate',
    startDate: 'August 2011',
    endDate: 'June 2012',
    jobDescription: "As Ticket Operations Associate, I assisted with all day-to-day ticket operations.  I served as the primary ticket contact for baseball and secondary contact for football and men’s and women’s basketball.  I helped in the NCAA and Legislative audits.  On game days, I managed all ticket sellers, ticket scanners, ushering staff, and player pass gate.  I ran all ticket operations for the 2012 Louisiana State High School Basketball Championships for all classifications.  I oversaw a ticket selling staff and aided in the implementation of Louisiana High School Athletic Association (LHSAA) policy and procedures on event ticketing."
  },
  ],
   education: [
   {
     id: uniqid(),
     school: 'Louisiana Tech University',
     city: 'Ruston, LA',
     degree: 'BA in History',
     startDate: 'June 2005',
     endDate: 'May 2011',
   },
  ],
   skill:[ 
     {
     id: uniqid(),
     skillName: "HTML & CSS, Javascript, ReactJS, Redux, NextJS",
    },
    {
      id: uniqid(),
      skillName: "nodeJS, express, MongoDB, mongoose",
     },
     {
      id: uniqid(),
      skillName: "git, github, Jest, npm, webpack, heroku, netlify, vercel",
     },
    {
      id: uniqid(),
      skillName: "Ticketmaster Archtics and Host",
    },
    {
      id: uniqid(),
      skillName: "Self-starting, Problem solving, Ability to work under pressure ",
    },

  ],
}
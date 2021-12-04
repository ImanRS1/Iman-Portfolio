import plane1 from "./img/plane3.jpg"
import plane2 from "./img/plane2.jpg"
import code1 from "./img/code1.jpg";
import salt from "./img/salt.jpg"
import code3 from "./img/code3.jpg";
import turbine1 from "./img/gasturbine12.jpg";
import siemens3 from "./img/siemens3.jpg"

export const WorkState = () => {
  return [
    {
      title: "Full Stack Developer",
      mainImg: salt,
      secondaryImg: code3,
      url: "/work/work",
      workDescription1: "With an acceptance rate of approximately 2% from over 1500 applicants I was picked together with 30 people to enroll in SALT's highly successful and intensive full stack developer bootcamp.",
      workDescription2: "The program had a great emphasis on communication between developers as mob programming and agile work methods were heavily implemented. TDD was one of the core concepts utilised.",
      workDescription3: "To mention part of the tech that was used during the program: JavaScript, React, ExpressJS, REST, Node, MongoDB, PostgreSQL, Redux, Jest, Docker, AWS, CI/CD and more.",
      workDescription4: "Currently I am employed by SALT as one of their full stack developer consultants.",
      workDescription5: "See below for some of my featured projects:",
    },
    {
      title: "Commissioning Engineer",
      mainImg: turbine1,
      secondaryImg: siemens3,
      url: "/work/work1",
      workDescription1: "During my time at Siemens I have been working with hot and cold commissioning as well as service of Siemens medium gas turbines ranging from 19MW to 53MW (SGT-500, 600, 700, 800).",
      workDescription2: "My position requires me to be technically knowledgeable, heavily self-reliant while also being customer minded and have the ability to easily adapt to different cultures of the clients.",
      workDescription3: "With up to 80% of the work being carried abroad, my profession has taken me to multiple corners of the world ranging from South America to Northern Siberia to East Asia as well as to Africa.",  
      workDescription4: "The profession has given me experience and knowledge of automation systems such as Siemens PSC7 and ABB Advant, control logic and programming, vibration equipment such as the Bentley Nevada systems, actuators and servo actuators such as the MOOG system. Protection and monitoring systems such as the BRAUN system. Statistics and monitoring systems such as the Siemens Condition Monitoring Systems and much more.",
      workDescription5: "The work requires me to be hands on as well as acting as a technical field adviser depending on the situation and generally requires me to be heavily adaptable and quick minded.",      
      
    },
    {
      title: "Engineering Part-M",
      mainImg: plane1,
      url: "/work/work2",
      secondaryImg: plane2,
      workDescription1: "After completing my thesis work at the airline company NextJet, I was offered a position at the engineering department.",
      workDescription2: "During my time working at NextJet I developed several of the internal and external technical procedures and manuals. As well as evaluating service bulletins, air worthiness directives and creating engineering and repair orders for the airlines SAAB340 and BAe ATP airplanes.",
      workDescription3: "I also acted as contact towards external maintenance organizations, part manufacturers and different aviation authorities such as the European EASA, the american FAA and the Swedish aviation authority. Furthermore it was my role to act as support towards the maintenance control center, the maintenance planner and Part-145.",
      workDescription4: "Beyond that I also took part in a project to roll out a new maintenance software and the training of the companies technicians in that software.",
    },
  ];
};

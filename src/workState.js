import plane1 from "./img/plane3.jpg"
import plane2 from "./img/plane2.jpg"
import code2 from "./img/code2.jpg";
import code3 from "./img/code3.jpg";
import turbine1 from "./img/gasturbine12.jpg";
import siemens3 from "./img/siemens3.jpg"

export const WorkState = () => {
  return [
    {
      title: "Front-end Developer",
      mainImg: code2,
      secondaryImg: code3,
      url: "/work/work",
      workDescription1: "Starting in mid 2020, I have studied both Front-end development at Changemaker Educations as well as studying independently.",
      workDescription2: "My goal and ambition has always been to possess a firm understanding of the foundational skills and principles of web development while also ambitiously approaching new frameworks/libraries and new ways of using old skills.",
      workDescription3: "I truly believe that in a field such as this one, it is of utmost importance to never stop developing and increasing ones knowledge/competence. The IT sphere in general is an ever evolving one, as new needs arises and old needs increases so does the technology which evolves and grows to meet those demands. I believe that understanding, accepting and embracing that will yield better progress and results as a developer.",
      workDescription4: "See bellow for some of my featured projects:",
    },
    {
      title: "Commissioning Engineer",
      mainImg: turbine1,
      secondaryImg: siemens3,
      url: "/work/work1",
      workDescription1: "beskrivning 1",
      workDescription2: "beskrivning 2",
      workDescription3: "beskrivning 3",
      workDescription4: "beskrivning 4",
      
    },
    {
      title: "Engineering Part-M",
      mainImg: plane1,
      url: "/work/work2",
      secondaryImg: plane2,
      workDescription1: "beskrivning 1",
      workDescription2: "beskrivning 2",
      workDescription3: "beskrivning 3",
      workDescription4: "beskrivning 4",
    },
  ];
};

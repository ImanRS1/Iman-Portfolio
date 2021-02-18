import home1 from "./img/placeholder-img.jpg"
import code2 from "./img/code2.jpg";
import turbine1 from "./img/gasturbine1.jpg";

export const WorkState = () => {
  return [
    {
      title: "Code",
      mainImg: code2,
      secondaryImg: code2,
      url: "/work/work",
      workDescription: "Beskrivning 000",
    },
    {
      title: "JOB1",
      mainImg: turbine1,
      secondaryImg: turbine1,
      url: "/work/work1",
      workDescription: "beskrivning 1",
    },
    {
      title: "JOB2",
      mainImg: home1,
      url: "/work/work2",
      secondaryImg: home1,
      workDescription: "beskrivning 2",
    },
  ];
};

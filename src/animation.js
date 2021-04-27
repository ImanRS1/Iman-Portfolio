export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const skillAnim = {
  hidden: { y: 300 },
  show: {
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const attributeAnim = {
  hidden: { y: 400, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const animStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const skillsStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const contactAnim = {
  hidden: { x: -400 },
  show: {
    x: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const fpInfoFade = {
  hidden: { opacity: 0, y: 200 },
  show: {
    y: -0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 1.5,
    },
  },
};

export const imgAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1 } },
};

export const lineAnimSlow = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1.5 } },
};

export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};

export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },

  show: {
    opacity: 1,
    scale: 1.0,
    transition: {
      duration: 0.5,
    },
  },
};

export const expandProject = {
  show: {
    scale: 1.1,
    width: "900%",
    zIndex: 5,
    transition: {
      duration: 0.5,
    },
  },
};

export const reduceProject = {
  show: {
    width: "100%",
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

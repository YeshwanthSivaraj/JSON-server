const courses = [
  {
    id: 1,
    title: "Hearing Balance And Learning",
    slug: "hearing-balance-learning",
    authorId: 1,
    category: "Neuroscience"
  },
  {
    id: 2,
    title: "Discover The Mind",
    slug: "discover-mind",
    authorId: 2,
    category: "Psychology"
  },
  {
    id: 3,
    title: "Smell Taste And Chemicals That Control You",
    slug: "smell-taste-chemicals-control",
    authorId: 1,
    category: "Neuroscience"
  },
  {
    id: 4,
    title: "Learn Skills Faster",
    slug: "learn-skills-faster",
    authorId: 2,
    category: "Psychology"
  },
  {
    id: 5,
    title: "Optimize Testosterone And Estrogen",
    slug: "optimize-testosterone-estrogen",
    authorId: 1,
    category: "Endocrinology"
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 3,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 3,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 3,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 3,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 3,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Andrew Huberman" },
  { id: 2, name: "Karl Deisseroth" },
  { id: 3, name: "FreeCodeCamp" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};

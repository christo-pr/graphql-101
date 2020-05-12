const SKILLS = [
  {
    id: 1,
    name: "Javascript",
  },
  {
    id: 2,
    name: "Ruby on Rails",
  },
  {
    id: 3,
    name: "Mobile iOS/Android",
  },
  {
    id: 4,
    name: "Python",
  },
  {
    id: 5,
    name: "DevOps",
  },
  {
    id: 6,
    name: "UX / UI",
  },
]
const MICHELADOS = [
  {
    id: 1,
    name: "David",
    description: "CEO at michelada.io",
    skills: [2, 1, 5],
    projects: [1],
  },
  {
    id: 2,
    name: "Noel",
    description: "Javascript Developer",
    skills: [1, 3, 4],
    projects: [1, 2],
  },
  {
    id: 3,
    name: "Christofer",
    description: "Web Developer",
    skills: [1, 4],
    projects: [3],
  },
]
const PROJECTS = [
  { id: 1, name: "VoYvengo", description: "App para viajar" },
  { id: 2, name: "PrestaMas", description: "App de prestamos" },
  { id: 3, name: "VendeTodo", description: "App para vender todo" },
]

module.exports = {
  Query: {
    michelado: function (parent, args, ctx, info) {
      const { id } = args
      return MICHELADOS.find((m) => m.id === parseInt(id))
    },
    projects: function (parent, args, ctx, info) {
      return PROJECTS
    },
    skills: function (parent, args, ctx, info) {
      return SKILLS
    },
  },
  Michelado: {
    skills: function (parent, args, ctx, info) {
      const skillsIds = parent.skills
      return SKILLS.filter((sk) => skillsIds.includes(sk.id))
    },
    projects: function (parent, args, ctx, info) {
      const projectsIds = parent.projects
      return PROJECTS.filter((p) => projectsIds.includes(p.id))
    },
  },
}

const { gql } = require("apollo-server")

module.exports = gql`
  type Michelado {
    id: ID!
    name: String
    description: String
    skills: [Skill]
    projects: [Project]
  }

  type Skill {
    id: ID!
    name: String
  }

  type Project {
    id: ID!
    name: String
    description: String
  }

  type Query {
    michelado(id: ID!): Michelado
    projects: [Project]
    skills: [Skill]
  }
`

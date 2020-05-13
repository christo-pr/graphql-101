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

  input MicheladoInput {
    name: String
    description: String
  }

  input SkillMicheladoInput {
    michelado: ID
    skills: [ID]
  }

  type Query {
    michelado(id: ID!): Michelado
    michelados: [Michelado]
    projects: [Project]
    skills: [Skill]
  }

  type Mutation {
    addMichelado(input: MicheladoInput): Michelado
    addSkillToMichelado(input: SkillMicheladoInput): Michelado
  }
`

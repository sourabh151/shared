const express = require("express");
const { ruruHTML } = require("ruru/server")
const { buildSchema } = require("graphql")
const { createHandler } = require("graphql-http/lib/use/express")
require("dotenv").config()
const app = express();

const schema = buildSchema(`
type Query{
rollDice(numDice:Int!,sides:Int):[Int]
}
`)

const root = {
  rollDice({ numDice, sides }) {
    let r = []
    for (let i = 0; i < numDice; i++) {
      r.push(Math.floor(Math.random() * (sides || 6)) + 1)
    }
    return r
  }
}


app.all("/graphql",
  createHandler({
    schema: schema,
    rootValue: root
  })
)

app.get("/", (req, res) => {
  res.type("html").end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(process.env.PORT, () => {
  console.log("App listening on port " + process.env.PORT);
})

const express = require("express");
const { ruruHTML } = require("ruru/server")
const { buildSchema } = require("graphql")
const { createHandler } = require("graphql-http/lib/use/express")
require("dotenv").config()
const app = express();

const schema = buildSchema(`
type Query{
rollDice(numDice:Int!,sides:Int):[Int]
frequency:[[Int!]!]
}
`)

const root = {
  r: [],
  rollDice({ numDice, sides }) {
    r = []
    for (let i = 0; i < numDice; i++) {
      r.push(Math.floor(Math.random() * (sides || 6)) + 1)
    }
    return r
  },
  frequency() {
    const list = new Map();
    for (e of r) {
      if (list.has(e)) {
        list.set(e, (list.get(e) + 1))
      }
      else {
        list.set(e, 1)
      }
    }
    return Array.from(list)
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

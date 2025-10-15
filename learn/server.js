import { createServer } from "node:http"
import express from "express"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { Server } from "socket.io"


const app = express()
const server = createServer(app)
const io = new Server(server)

const __dirname = dirname(fileURLToPath(import.meta.url))

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"))
  console.log("/")
})

io.on("connection", (socket) => {
  console.log("new connection")
})

server.listen(3000, () => {
  console.log("server listening on port 3000")
})

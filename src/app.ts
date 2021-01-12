import express, {Application} from "express"

export const app: Application = express()

app.get("/", (request, response) => {
  response.send("Hello World")
})

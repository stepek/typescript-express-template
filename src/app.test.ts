import {app} from "./app"
import request from "supertest"

describe("Test App", () => {
  it("Request / should return Hello World", async () => {
    const result = await request(app).get("/").send()

    expect(result.status).toBe(200)
    console.log(result)
    expect(result.text).toBe("Hello World")
  })
})

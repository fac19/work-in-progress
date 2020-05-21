const dbconnection = require("../database/connection")
const build = require("../database/build")
const {
  getUsers,
  addUser,
  getUserByName,
  getUserById,
} = require("../model/users-model")
// const model = require('../model')

describe("File tests are running", () => {
  test("1 should equal 1", () => {
    expect(1).toEqual(1)
  })
})

// beforeEach(() => {
//   build()
// })
build()

// Tests user-models
describe("Database tests for users", () => {
  test("information can be retrieved", async () => {
    await getUsers().then((data) => {
      expect(data.username).toEqual("CampbellDocherty")
    })
    // .catch(console.error)
  })

  test("A new user can be added to the database", async () => {
    const testUser = {
      username: "Kat",
      email: "kat@iscool.com",
      bio: "Hi, I am Kat and I am ready to work",
      vocation: "Illustrator",
      password: "hellohello",
    }
    await addUser(testUser).then((data) => {
      expect(data.username).toEqual("Kat")
      expect(data.password).toEqual("hellohello")
    })
    // .catch(console.error)
  })

  test("Can get a user using the username", async () => {
    await getUserByName("CampbellDocherty").then((data) => {
      expect(data.username).toEqual("CampbellDocherty")
    })
  })

  test("Can get a user by Id", async () => {
    await getUserById("1").then((user) => {
      expect(user.id).toEqual("1")
    })
  })
})

afterAll(() => {
  console.log("End of testing for Database")
  return dbconnection.end()
})

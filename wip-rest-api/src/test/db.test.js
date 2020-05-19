const dbconnection = require('../database/connection');
const build = require('../database/build')
const {getUsers} = require('../model/users-model')
// const model = require('../model')


describe("File tests are running", () => {
  test("1 should equal 1", () => {
    expect(1).toEqual(1);
  });
});

// build();

// describe("Database tests are running", () => {
//   test("information can be retrieved", () => {
    
//     const username = getUsers();
//     expect(username).toEqual('CampbellDocherty');

//   });
// });

// Tests user-models 
describe("Database tests are running", () => {
  test("information can be retrieved", () => {
    build().then(() => {
      getUsers().then((data) => {
        expect(data.username).toEqual("CampbellDocherty")
      })
    })
    .catch(console.error)
  })
})

afterAll(() => {
  console.log("End of testing for Database")
  return dbconnection.end();
});
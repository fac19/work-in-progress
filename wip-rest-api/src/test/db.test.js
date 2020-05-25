const dbconnection = require("../database/connection");
const build = require("../database/build");
const {
  // getUsers,
  addUser,
  getUserByName,
  getUserById,
  updateUser,
  // deleteUser,
} = require("../model/users-model");

const { getFeedback } = require("../model/feedback-model");

afterAll(() => {
  console.log("End of testing for Database");
  return dbconnection.end();
});

describe("File tests are running", () => {
  test("1 should equal 1", () => {
    expect(1).toEqual(1);
  });
});

describe("Database tests for users", () => {
  beforeEach(() => {
    build();
  });
  // test("information can be retrieved", async () => {
  //   await getUsers().then((data) => {
  //     expect(data.username).toEqual("CampbellDocherty");
  //   });
  // .catch(console.error)
  // });

  test("A new user can be added to the database", async () => {
    const testUser = {
      username: "Kat",
      email: "kat@iscool.com",
      bio: "Hi, I am Kat and I am ready to work",
      vocation: "Illustrator",
      password: "hellohello",
    };
    await addUser(testUser).then((data) => {
      expect(data.username).toEqual("Kat");
      expect(data.password).toEqual("hellohello");
    });
    // .catch(console.error)
  });

  test("Can get a user using the username", async () => {
    await getUserByName("CampbellDocherty").then((data) => {
      expect(data.username).toEqual("CampbellDocherty");
    });
  });

  test("Can get a user by Id", async () => {
    await getUserById("1").then((user) => {
      expect(user.id).toEqual(1);
    });
  });

  test("Can update user data", async () => {
    const testUpdateUser = {
      username: "CampbellDocherty",
      email: "hey@123.com",
      bio: "I am a freelance illustrator trying to make it bigger!!",
      vocation: "Freelance Illustrator",
      password: "progression",
    };
    await updateUser("1", testUpdateUser).then((user) => {
      expect(user.user_bio).toEqual(
        "I am a freelance illustrator trying to make it bigger!!"
      );
      expect(user.user_vocation).toEqual("Freelance Illustrator");
    });
  });

  //   COME BACK TO THIS
  //     test("User can be deleted from the database", async () => {
  //     await deleteUser("1").then(() => {
  //       getUserById("1").then((result) => {
  //         expect(result).toEqual(null);
  //       });
  //     });
  //   });
});

describe("Database tests for projects", () => {
  beforeEach(() => {
    build();
  });

  test("Get feedback from database using stepId", async () => {
    await getFeedback("2").then((feedback) => {
      expect(feedback[0].feedback_text).toEqual(
        "Hey Han its Cam what a nice dog"
      );
    });
  });
});

describe("Database tests for feedback", () => {
  beforeEach(() => {
    build();
  });

  test("Get feedback from database using stepId", async () => {
    await getFeedback("2").then((feedback) => {
      expect(feedback[0].feedback_text).toEqual(
        "Hey Han its Cam what a nice dog"
      );
    });
  });
});

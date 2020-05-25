const dbconnection = require("../database/connection.js");
const build = require("../database/build");
const {
  // getUsers,
  addUser,
  getUserByName,
  getUserById,
  updateUser,
  // deleteUser,
} = require("../model/users-model");

const projectmodel = require("../model/projects-model");

const {
  getFeedback,
  getUserIdByFeedbackId,
  addFeedback,
  updateFeedback,
} = require("../model/feedback-model");

const {
  addToWatching,
  removeFromWatching,
} = require("../model/watching-model");

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

  test("Get all watched projects returns array of correct length", async () => {
    await projectmodel.getWatchedProjectsFromDb("2").then((projects) => {
      expect(projects.length).toEqual(4);
    });
  });

  test("Get info from watched projects", async () => {
    await projectmodel.getWatchedProjectsFromDb("2").then((projects) => {
      expect(projects[2].project_name).toEqual("A friend");
    });
  });

  test("Get user projects returns correct length", async () => {
    await projectmodel.getUserProjectsFromDb("2").then((projects) => {
      expect(projects.length).toEqual(1);
    });
  });

  test("Get info from user project", async () => {
    await projectmodel.getUserProjectsFromDb("2").then((projects) => {
      expect(projects[0].project_name).toEqual("A moon");
    });
  });

  test("Can add new project", async () => {
    const newProject = {
      project_name: "An elephant",
      project_description: "I think I could make this look more life-like",
    };
    await projectmodel.addNewProjectToDb("2", newProject).then((project) => {
      expect(project.project_name).toEqual("An elephant");
    });
  });
});

describe("Database tests for feedback", () => {
  beforeEach(() => {
    build();
  });

  test("Get feedback from database using stepId", async () => {
    const stepId = 8;
    await getFeedback(stepId).then((feedback) => {
      expect(feedback[0].feedback_text).toEqual(
        "Hey J man its Han have you considered craters"
      );
    });
  });

  test("Get userId by FeedbackId", async () => {
    await getUserIdByFeedbackId("2").then((feedback) => {
      expect(feedback.user_id).toEqual(4);
    });
  });

  test("Post feedback using stepID", async () => {
    const userId = 4;
    const stepId = 3;
    await addFeedback(userId, stepId, "testing testing 123", "test?").then(
      (feedback) => {
        expect(feedback.feedback_text).toEqual("testing testing 123");
      }
    );
  });

  test("Put feedback using feedbackID", async () => {
    const feedbackId = 1;
    await updateFeedback(feedbackId, "hey han").then((feedback) => {
      expect(feedback.feedback_text).toEqual("hey han");
    });
  });
});

describe("Database tests for watching", () => {
  beforeEach(() => {
    build();
  });

  test("Add watched project by projectId", async () => {
    const userId = 1;
    const projectId = 3;
    await addToWatching(userId, projectId).then((watched) => {
      expect(watched.project_id).toEqual(3);
      expect(watched.user_id).toEqual(1);
    });
  });

  test("Remove watched project by userId & projectId", async () => {
    const userId = 4;
    const projectId = 4;
    await removeFromWatching(userId, projectId).then((watched) => {
      expect(watched.project_id).toEqual(4);
      expect(watched.user_id).toEqual(4);
    });
  });
});

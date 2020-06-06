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

const projectsmodel = require("../model/projects-model");
const stepsmodel = require("../model/steps-model");

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
  beforeEach(async () => {
    await build();
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
      expect(data.id).toEqual(5);
    });
    // .catch(console.error)
  });

  test("Can get a user using the username", async () => {
    await getUserByName("cammyd").then((data) => {
      expect(data.password).toEqual(
        "$2a$10$bWvVpjSqqysqZarWg38wu.jRzq404fcCWxjOkxUp18M3S8XsWEIse"
      );
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
  beforeEach(async () => {
    await build();
  });

  test("Get project by projectId", async () => {
    await projectsmodel.getProjectFromDb("1").then((project) => {
      expect(project.project_name).toEqual("Plant Lover");
    });
  });

  test("Get all watched projects returns array of correct length", async () => {
    await projectsmodel.getWatchedProjectsFromDb("2").then((projects) => {
      expect(projects.length).toEqual(7);
    });
  });

  test("Get info from watched projects", async () => {
    await projectsmodel.getWatchedProjectsFromDb("2").then((projects) => {
      expect(projects[2].project_name).toEqual("Plant Lover");
    });
  });

  test("Get user projects returns correct length", async () => {
    await projectsmodel.getUserProjectsFromDb("2").then((projects) => {
      expect(projects.length).toEqual(5);
    });
  });

  test("Get info from user project", async () => {
    await projectsmodel.getUserProjectsFromDb("2").then((projects) => {
      expect(projects[0].project_name).toEqual("The cutest dog in the world");
    });
  });

  test("Get all explore projects", async () => {
    await projectsmodel
      .getWatchedProjectsFromDb("3")
      .then((watchedProjects) => {
        projectsmodel.getAllProjectsFromDb().then((allProjects) => {
          const watchedIds = watchedProjects.map(
            (watchedProject) => watchedProject.id
          );
          const exploreProjects = allProjects.filter(
            (project) => watchedIds.indexOf(project.id) === -1
          );
          expect(exploreProjects.length).toEqual(10);
        });
      });
  });

  test("Get info from explore projects", async () => {
    await projectsmodel
      .getWatchedProjectsFromDb("3")
      .then((watchedProjects) => {
        projectsmodel.getAllProjectsFromDb().then((allProjects) => {
          const watchedIds = watchedProjects.map(
            (watchedProject) => watchedProject.id
          );
          const exploreProjects = allProjects.filter(
            (project) => watchedIds.indexOf(project.id) === -1
          );
          expect(exploreProjects[0].project_name).toEqual(
            "The cutest dog in the world"
          );
        });
      });
  });

  test("Can add new project", async () => {
    const newProject = {
      project_name: "An elephant",
      project_description: "I think I could make this look more life-like",
    };
    await projectsmodel.addNewProjectToDb("2", newProject).then((project) => {
      expect(project.project_name).toEqual("An elephant");
    });
  });
});

describe("Database tests for steps", () => {
  beforeEach(async () => {
    await build();
  });

  test("Get all steps with project id", async () => {
    await stepsmodel.getStepsWithProjectId("1").then((steps) => {
      expect(steps.length).toEqual(3);
    });
  });

  test("Get detail of steps with project id", async () => {
    await stepsmodel.getStepsWithProjectId("1").then((steps) => {
      expect(steps[0].step_description).toEqual(
        "I have roughly mapped out what I want the drawing to look like. It is not a complete concept yet, but I would love some feedback on what I have so far"
      );
    });
  });

  test("Add step with project id", async () => {
    const step = {
      step_name: "1 5th sketch",
      step_description: "1 Someone chopping down the tree",
      step_link: "/images/11.jpg",
    };
    await stepsmodel.addStepWithProjectId("1", step).then((newStep) => {
      expect(newStep.step_description).toEqual(
        "1 Someone chopping down the tree"
      );
    });
  });
});

describe("Database tests for feedback", () => {
  beforeEach(async () => {
    await build();
  });

  test("Get feedback from database using stepId", async () => {
    const stepId = 1;
    await getFeedback(stepId).then((feedback) => {
      expect(feedback[0].feedback_text).toEqual(
        "Hey Cammy, you really do love plants haha! I think you are going in the right direction, clean up the sketch in black and white first before you add colour."
      );
    });
  });

  test("Get userId by FeedbackId", async () => {
    await getUserIdByFeedbackId("2").then((feedback) => {
      expect(feedback.user_id).toEqual(2);
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
  beforeEach(async () => {
    await build();
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
    const userId = 2;
    const projectId = 1;
    await removeFromWatching(userId, projectId).then((watched) => {
      expect(watched.project_id).toEqual(1);
      expect(watched.user_id).toEqual(2);
    });
  });
});

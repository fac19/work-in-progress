import React from "react";
import { createMemoryHistory } from "history";
import TestRenderer from "react-test-renderer";
import AddProjectPage from "./AddProjectPage";
import { Router } from "react-router-dom";

describe("Snapshot test", () => {
  it("renders the correct ui", () => {
    const history = createMemoryHistory();
    const component = TestRenderer.create(
      <Router history={history}>
        <AddProjectPage />
      </Router>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

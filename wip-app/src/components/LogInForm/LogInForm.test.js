import React from "react";
import TestRenderer from "react-test-renderer";
import LogInForm from "./LogInForm";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Snapshot test", () => {
  const history = createMemoryHistory();
  it("renders the correct ui", () => {
    const component = TestRenderer.create(
      <Router history={history}>
        <LogInForm />
      </Router>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

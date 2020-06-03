import React from "react";
import TestRenderer from "react-test-renderer";
import SignUpForm from "./SignUpForm";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Snapshot test", () => {
  it("renders the correct ui", () => {
    const history = createMemoryHistory();
    const component = TestRenderer.create(
      <Router history={history}>
        <SignUpForm />
      </Router>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

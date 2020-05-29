import React from "react";
import TestRenderer from "react-test-renderer";
import TopNavbar from "./TopNavbar";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("Snapshot test", () => {
  const history = createMemoryHistory();
  it("renders the correct ui", () => {
    const component = TestRenderer.create(
      <Router history={history}>
        <TopNavbar />
      </Router>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

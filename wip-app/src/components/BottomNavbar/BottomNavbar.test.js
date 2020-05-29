import React from "react";
import TestRenderer from "react-test-renderer";
import BottomNavbar from "./BottomNavbar";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("Snapshot test", () => {
  const history = createMemoryHistory();
  it("renders the correct ui", () => {
    const component = TestRenderer.create(
      <Router history={history}>
        <BottomNavbar />
      </Router>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

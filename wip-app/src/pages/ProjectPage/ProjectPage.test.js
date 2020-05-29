import React from "react";
import TestRenderer from "react-test-renderer";
import ProjectPage from "./ProjectPage";

describe("Snapshot test", () => {
  it("renders the correct ui", () => {
    const component = TestRenderer.create(<ProjectPage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

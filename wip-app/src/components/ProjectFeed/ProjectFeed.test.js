import React from "react";
import TestRenderer from "react-test-renderer";
import ProjectFeed from "./ProjectFeed";

describe("Snapshot test", () => {
  const projects = [{ id: 1 }, { id: 2 }];
  it("renders the correct ui", () => {
    const component = TestRenderer.create(<ProjectFeed projects={projects} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import TestRenderer from "react-test-renderer";
import Upload from "./Upload";

describe("Snapshot test", () => {
  it("renders the correct ui", () => {
    const component = TestRenderer.create(<Upload />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

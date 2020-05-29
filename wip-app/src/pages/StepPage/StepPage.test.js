import React from "react";
import TestRenderer from "react-test-renderer";
import StepPage from "./StepPage";

describe("Snapshot test", () => {
  it("renders the correct ui", () => {
    const component = TestRenderer.create(<StepPage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

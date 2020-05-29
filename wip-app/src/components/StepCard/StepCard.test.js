import React from "react";
import TestRenderer from "react-test-renderer";
import StepCard from "./StepCard";

describe("Snapshot test", () => {
  it("renders the correct ui", () => {
    const component = TestRenderer.create(<StepCard />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

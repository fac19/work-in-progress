import React from "react";
import TestRenderer from "react-test-renderer";
import AddNewStepForm from "./AddNewStepForm";

describe("Snapshot test", () => {
  it("renders the correct ui", () => {
    const component = TestRenderer.create(<AddNewStepForm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

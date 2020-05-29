import React from "react";
import TestRenderer from "react-test-renderer";
import LogInForm from "./LogInForm";

describe("Snapshot test", () => {
  it("renders the correct ui", () => {
    const component = TestRenderer.create(<LogInForm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

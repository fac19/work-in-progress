import React from "react";
import TestRenderer from "react-test-renderer";
import SignUpForm from "./SignUpForm";

describe("Snapshot test", () => {
  it("renders the correct ui", () => {
    const component = TestRenderer.create(<SignUpForm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

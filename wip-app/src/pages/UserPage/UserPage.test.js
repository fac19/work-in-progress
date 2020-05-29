import React from "react";
import TestRenderer from "react-test-renderer";
import UserPage from "./UserPage";

describe("Snapshot test", () => {
  it("renders the correct ui", () => {
    const component = TestRenderer.create(<UserPage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

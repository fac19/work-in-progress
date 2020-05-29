import React from "react";
import TestRenderer from "react-test-renderer";
import App from "./App";

describe("Snapshot test", () => {
  it("renders the correct ui", () => {
    const component = TestRenderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

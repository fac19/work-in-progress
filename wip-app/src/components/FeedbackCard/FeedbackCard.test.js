import React from "react";
import TestRenderer from "react-test-renderer";
import FeedbackCard from "./FeedbackCard";

describe("Snapshot test", () => {
  it("renders the correct ui", () => {
    const feedback = [{ id: 1 }, { id: 2 }];
    const component = TestRenderer.create(<FeedbackCard feedback={feedback} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

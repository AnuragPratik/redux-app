import React from "react";
import Link from "../test-data/Link";
import renderer from "react-test-renderer";

//npm i react-test-render
it("renders correctly", () => {
  const tree = renderer.create(<Link page="www.yahoo.com" />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});

import { ADD_INPUTS, SUBTRACT_INPUTS } from "../actions/types";
import { addInputs, subtractInputs } from "../actions/calculatorActions";

describe("Test calculator actions", () => {
  it("Action for ADD", () => {
    const addResult = addInputs(10, 20);
    expect(addResult).toEqual({
      type: ADD_INPUTS,
      payload: 30,
    });
  });
  it("Action for SUB", () => {
    const subResult = subtractInputs(20, 10);
    expect(subResult).toEqual({
      type: SUBTRACT_INPUTS,
      payload: 10,
    });
  });
});

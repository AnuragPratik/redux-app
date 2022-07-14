describe("Testing functional module", () => {
  it("Adding 2 + 2 to get 4", () => {
    //AAA -> arrange, act, assert

    //arrange
    let x = 2;
    let y = 2;
    let result = 0;

    //act
    result = x + y;

    //assert -> expectations are met or not with actual

    expect(result).toEqual(4);
  });
});

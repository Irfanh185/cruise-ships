/* globals describe it expect */
const Ship = require("../src/Ship.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    const ship = new Ship("Dover");

    expect(new Ship()).toBeInstanceOf(Object);
  });
});

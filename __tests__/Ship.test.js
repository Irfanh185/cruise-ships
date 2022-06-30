/* globals describe it expect */
const Ship = require("../src/Ship.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    const ship = new Ship("Dover");

    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    const ship = new Ship("Dover");

    expect(ship.currentPort).toEqual("Dover");
  });

  it("can set sail", () => {
    const ship = new Ship("Dover");

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });
});

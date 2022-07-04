const Port = require("../src/Port.js");

describe("Port", () => {
  it("can be instantiated", () => {
    const port = new Port("Liverpool");

    expect(new Port()).toBeInstanceOf(Object);
  });

  it("port should have a name", () => {
    const port = new Port("Dover");

    expect(port.name).toEqual("Dover");
  });

  it("can add a ship", () => {
    const port = new Port("Dover");
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });

  it("can remove a ship", () => {
    const port = new Port("Dover");
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(titanic);
    expect(port.ships).toEqual([titanic]);
  });
});

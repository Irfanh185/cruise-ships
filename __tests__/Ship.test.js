/* globals describe it expect */
const Ship = require("../src/Ship");
const Port = require("../src/Port");
const Itinerary = require("../src/Itinerary");

describe("Ship", () => {
  it("can be instantiated", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toEqual(port);
  });

  it("can set sail", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    // expect(ship.previousPort).toBe(port);
  });

  it("can dock at a different port", () => {
    // we have created the two ports for the itinerary
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    //we pass in the 2 ports to the itinerary
    const itinerary = new Itinerary([dover, calais]);
    //create a new ship object with the itinerary passed in.
    const ship = new Ship(itinerary);
    // ship sets sails from previous port so it know where to dock next
    ship.setSail();
    //we dont need to pass in a port because the next port will come from the itinerary.
    ship.dock();

    expect(ship.currentPort).toBe(calais);
  });

  it("can not sail further than its itenerary", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itenerary = new Itinerary([dover, calais]);
    const ship = new Ship(itenerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });
});

/* globals describe it expect */
const Ship = require("../src/Ship");

describe("Ship", () => {
  describe("with ports and an itinerary", () => {
    let ship;
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {
      dover = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Dover",
        ships: [],
      };

      calais = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Calais",
        ships: [],
      };

      itinerary = {
        ports: [dover, calais],
      };
      ship = new Ship(itinerary);
    });

    it("can be instantiated", () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it("has a starting port", () => {
      expect(ship.currentPort).toEqual(dover);
    });

    it("can set sail", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
      // expect(ship.previousPort).toBe(port);
    });

    it("can dock at a different port", () => {
      // ship sets sails from previous port so it know where to dock next
      ship.setSail();
      //we dont need to pass in a port because the next port will come from the itinerary.
      ship.dock();

      expect(ship.currentPort).toBe(calais);
      expect(calais.addShip).toHaveBeenCalledWith(ship);
    });

    it("can not sail further than its itenerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });

    it("gets added to port on instantiation", () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });
  });
});

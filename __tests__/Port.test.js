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
});

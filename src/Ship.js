class Ship {
  constructor(currentPort) {
    this.currentPort = currentPort;
  }
  setSail() {
    return (this.currentPort = "");
  }
}

module.exports = Ship;

// If current port not === current port then return false

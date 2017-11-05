class Intent {
  constructor(name) {
    if (!name) {
      throw new Error('name must be defined');
    }

    this.name = name;
  }

  getName() {
    return this.name;
  }
};

module.exports = Intent;

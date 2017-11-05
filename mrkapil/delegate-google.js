const Delegate = require('./delegate');

class GoogleDelegate extends Delegate {

  constructor(assistant) {
    this.assistant = assistant;
  }

  getIntent() {

  }

  getRequestText() {

  }

  getArg(argName) {
    return null;
  }

  say(text) {

  }

  ask(text) {

  }

}

module.exports = GoogleDelegate;

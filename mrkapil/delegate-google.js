const Delegate = require('./delegate');

class GoogleDelegate extends Delegate {

  constructor(assistant) {
    this.assistant = assistant;
  }

  getArg(argName) {
    return this.assistant.getArgument(argName);
  }

  tell(text) {
    return this.assistant.tell(text);
  }

  ask(text) {
    return this.assistant.ask(text);
  }

}

module.exports = GoogleDelegate;

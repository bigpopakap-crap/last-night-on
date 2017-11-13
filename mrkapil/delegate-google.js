const Delegate = require('./delegate');

class GoogleDelegate extends Delegate {

  constructor(assistant) {
    super();
    this.assistant = assistant;
  }

  getArg(argName) {
    return this.assistant.getArgument(argName);
  }

  respond(response) {
    if (response.isPrompt()) {
      return this.assistant.ask(response.getText());
    } else {
      return this.assistant.tell(response.getText());
    }
  }

}

module.exports = GoogleDelegate;

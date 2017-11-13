const Delegate = require('./delegate');

class GoogleDelegate extends Delegate {

  constructor(assistant) {
    super();
    this.assistant = assistant;
  }

  getInputData() {
    const data = new InputDataBuilder();

    // TODO kapil make an input data object
//    const map = this.assistant.getArgument(argName);
//
//    Object.keys(map).forEach(argName => {
//      data.argAndValue(argName, map[argName]);
//    });

    return data.build();
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

class Delegate {

  getIntent() {}
  getRequestText() {}
  getArg(argName) { return null; }
  say(text) {}
  ask(text) {}

  respond(isQuestion, text) {
    if (isQuestion) {
      return this.ask(text);
    } else {
      return this.say(text);
    }
  }

}

module.exports = Delegate;

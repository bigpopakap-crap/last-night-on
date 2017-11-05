class Delegate {

  getIntent() {}
  getRequestText() {}
  getArg(argName) { return null; }
  tell(text) {}
  ask(text) {}

  say(isQuestion, text) {
    if (isQuestion) {
      return this.ask(text);
    } else {
      return this.say(text);
    }
  }

}

module.exports = Delegate;

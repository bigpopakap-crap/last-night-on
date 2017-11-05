class Assistant {

  constructor({
    startHandler,
    endHandler,
    intentHandlers,
    fallbackHandler
  }) {
    this.startHandler = startHandler;
    this.endHandler = endHandler;
    this.intentHandlers = intentHandlers;
    this.fallbackHandler = fallbackHandler;
  }

  handle(intent) {
    // match the start handler
    // match the end handler (pass isCancel in)
    // find the intent that matches and handle it
    // otherwise call the fallback handler
  }

}

module.exports = Assistant;

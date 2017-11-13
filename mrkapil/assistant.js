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

  getIntents() {
    return this.intentHandlers.map(ih => ih.intent);
  }

  // TODO log the user, platform, intent, and response
  handleStart(inputData) {
    return this.startHandler(inputData);
  }

  // TODO log the user, platform, intent, and response
  handleEnd(inputData, isCancel) {
    return this.endHandler(inputData, isCancel);
  }

  // TODO log the user, platform, intent, and response
  // TODO put the intent into the inputData param
  handle(intent, inputData) {
    const handlers = this.intentHandlers
                        .filter(ih => ih.intent.getName() === intent.getName())
                        .map(ih => ih.handler);

    if (handlers.length > 0) {
      return handlers[0](inputData);
    } else {
      return this.fallbackHandler(inputData);
    }
  }

}

module.exports = Assistant;

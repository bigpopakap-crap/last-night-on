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
  handleStart(delegate) {
    return this.startHandler(delegate);
  }

  // TODO log the user, platform, intent, and response
  handleEnd(delegate, isCancel) {
    return this.endHandler(delegate, isCancel);
  }

  // TODO log the user, platform, intent, and response
  handle(intent, delegate) {
    const handlers = this.intentHandlers
                        .filter(ih => ih.intent.getName() === intent.getName())
                        .map(ih => ih.intent.handler);

    if (handlers.length > 0) {
      return handler(delegate);
    } else {
      return this.fallbackHandler(delegate);
    }
  }

}

module.exports = Assistant;

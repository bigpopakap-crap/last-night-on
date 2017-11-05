const Assistant = require('./assistant.js');

function noop() {}

class AssistantBuilder {

  constructor() {
    this.intentHandlers = [];
  }

  start(handler) {
    this.startHandler = handler;
    return this;
  }

  end(handler) {
    this.endHandler = handler;
    return this;
  }

  intent(intent, handler) {
    this.intentHandlers.push({
      intent,
      handler
    });
    return this;
  }

  fallback(handler) {
    this.fallbackHandler = handler;
    return this;
  }

  build() {
    return new Assistant({
      startHandler: this.startHandler || noop,
      endHandler: this.endHandler || noop,
      intentHandlers: this.intentHandlers || [],
      fallbackHandler: this.fallbackHandler || noop
    });
  }

}

module.exports = AssistantBuilder;

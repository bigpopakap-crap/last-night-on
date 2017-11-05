const express = require('express');

const DebugDelegate = require('./delegate-debug.js');

class DebugAppBuilder {

  constructor() {
    // do nothing
  }

  build(assistant) {
    const app = express();

    assistant.getIntents().forEach(intent => {
      app.get(`/intent/${intent.getName()}`, (request, response) => {
        const debugDelegate = new DebugDelegate(request, response);
        assistant.handle(intent, debugDelegate);
      });
    });

    return app;
  }
}

module.exports = DebugAppBuilder;

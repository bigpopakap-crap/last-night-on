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
        const delegate = new DebugDelegate(request, response);
        const inputData = delegate.getInputData();

        return assistant.handle(intent, inputData)
                        .then(response => delegate.respond(response));
      });
    });

    return app;
  }
}

module.exports = DebugAppBuilder;

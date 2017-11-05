const express = require('express');

const DialogflowApp = require('actions-on-google').DialogflowApp;

const GoogleDelegate = require('./delegate-google.js');

class GoogleAppBuilder {

  constructor() {
    this.shouldUseDialogFlow = true;
  }

  useDialogFlow(shouldUseDialogFlow) {
    this.shouldUseDialogFlow = shouldUseDialogFlow;
    return this;
  }

  build(assistant) {
    const app = express();

    app.post('/', (request, response) => {
      // TODO actually switch between the DialogFlowApp and the ApiSdk
      const googleApp = new DialogflowApp({ request, response });

      const actionMap = new Map();
      assistant.getIntents().forEach(intent => {
        actionMap.set(intent.getName(), function(googleApp) {
          const delegate = new GoogleDelegate(googleApp);
          assistant.handle(intent, delegate);
        });
      });

      googleApp.handleRequest(actionMap);
    });

    return app;
  }
}

module.exports = GoogleAppBuilder;

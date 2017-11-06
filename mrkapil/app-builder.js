var express = require('express');

var GoogleAppBuilder = require('./app-builder-google.js');
var DebugAppBuilder = require('./app-builder-debug.js');

class AppBuilder {

  constructor() {
    // do nothing
    this.useGoogle = false;
    this.googleBuilder = new GoogleAppBuilder();

    this.shouldAllowDebug = false;
  }

  mixpanel(options) {
    this.mixpanelOptions = options;
    return this;
  }

  dashbot(options) {
    this.dashbotOptions = options;
    return this;
  }

  debugAt(debugMountAt) {
    this.debugMountAt = debugMountAt;
    this.shouldAllowDebug = true;
    return this;
  }

  google({
    mountAt,
    shouldUseDialogFlow
  }) {
    this.useGoogle = true;
    this.googleMountAt = mountAt;
    this.googleBuilder.useDialogFlow(shouldUseDialogFlow)
    return this;
  }

  alexa(options) {
    this.alexaOptions = options;
    return this;
  }

  facebook(options) {
    this.facebookOptions = options;
    return this;
  }

  build(assistant) {
    const app = express();

    // build and attach the google app
    if (this.useGoogle) {
      const googleApp = this.googleBuilder.build(assistant);
      if (this.googleMountAt) {
        app.use(this.googleMountAt, googleApp);
      } else {
        app.use(googleApp);
      }
    }

    // build the debug app
    if (this.shouldAllowDebug) {
      const debugApp = new DebugAppBuilder().build(assistant);
      app.use(this.debugMountAt, debugApp);
    }

    return app;
  }

}

module.exports = AppBuilder;

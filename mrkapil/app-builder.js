var express = require('express');

var GoogleAppBuilder = require('./app-builder-google.js');

class AppBuilder {

  constructor() {
    // do nothing
    this.googleBuilder = new GoogleAppBuilder();
  }

  mixpanel(options) {
    this.mixpanelOptions = options;
    return this;
  }

  dashbot(options) {
    this.dashbotOptions = options;
    return this;
  }

  google(mountAt, options) {
    this.googleMountAt = mountAt;
    this.googleBuilder(options);
    return this;
  }

  google({ shouldUseDialogFlow }) {
    this.googleBuilder.useDialogFlow(shouldUseDialogFlow);
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
    const googleApp = this.googleBuilder.build(assistant);
    if (this.googleMountAt) {
      app.use(this.googleMountAt, googleApp);
    } else {
      app.use(googleApp);
    }

    return app;
  }

}

module.exports = AppBuilder;

var express = require('express');

class AppBuilder {

  constructor() {
    // do nothing
  }

  mixpanel(options) {
    this.mixpanelOptions = options;
    return this;
  }

  dashbot(options) {
    this.dashbotOptions = options;
    return this;
  }

  google(options) {
    this.googleOptions = options;
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
    return express();
  }

}

module.exports = AppBuilder;

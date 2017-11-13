const Promise = require('promise');
const Response = require('./response.js');

class ResponseBuilder {

  constructor() {
    // do nothing
    this.isPrompt = false;
    this.text = null;
  }

  text(str) {
    this.text = str;
    return this;
  }

  expectResponse() {
    this.isPrompt = true;
    return this;
  }

  build() {
    return new Response({
      isPrompt: this.isPrompt,
      text: this.text
    });
  }

  buildAsPromise() {
    return Promise.resolve(this.build());
  }

}

module.exports = ResponseBuilder;

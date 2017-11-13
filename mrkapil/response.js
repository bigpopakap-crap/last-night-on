class Response {

  // TODO add a plain/SSML distinction
  // TODO add a speech/display text distinction
  // TODO add some debugData
  constructor({
    isPrompt,
    text
  }) {
    this.isPrompt = isPrompt || false;
    this.text = text || '';
  }

  isPrompt() {
    return this.isPrompt;
  }

  getText() {
    return this.text;
  }

}
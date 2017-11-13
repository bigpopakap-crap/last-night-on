class Delegate {

  getInputData() { throw new Error('delegates must implement getInputData()'); }
  respond(response) { throw new Error('delegates must implement respond()'); }

}

module.exports = Delegate;

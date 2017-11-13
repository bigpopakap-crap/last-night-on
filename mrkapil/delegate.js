class Delegate {

  getArg(argName) { throw new Error('delegates must implement getArg()'); }
  respond(response) { throw new Error('delegates must implement respond()'); }

}

module.exports = Delegate;

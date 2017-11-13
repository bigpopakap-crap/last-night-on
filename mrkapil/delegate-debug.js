const Delegate = require('./delegate');
const InputDataBuilder = require('./input-data-builder.js');

class DebugDelegate extends Delegate {

  constructor(request, response) {
    super();
    this.request = request;
    this.response = response;
  }

  getInputData(argName) {
    const data = new InputDataBuilder();

    const map = this.request.query;
    Object.keys(map).forEach(argName => {
      data.argAndValue(argName, map[argName]);
    });

    return data.build();
  }

  respond(response) {
    return this.response.status(200)
                        .header('content-type', 'application/json')
                        .send(response.toJson());
  }

}

module.exports = DebugDelegate;

const Delegate = require('./delegate');

class DebugDelegate extends Delegate {

  constructor(request, response) {
    super();
    this.request = request;
    this.response = response;
  }

  getArg(argName) {
    return this.request.query[argName];
  }

  tell(text) {
    return this.response.status(200)
                        .header('content-type', 'application/json')
                        .send({
                          action: 'tell',
                          message: text
                        });
  }

  ask(text) {
    return this.response.status(200)
                            .header('content-type', 'application/json')
                            .send({
                              action: 'ask',
                              message: text
                            });
  }

}

module.exports = DebugDelegate;

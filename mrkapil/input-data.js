class InputData {

  constructor({
    platformInfo,
    userInfo,
    deviceInfo,
    argMap
  }) {
    this.platformInfo = platformInfo || null;
    this.userInfo = userInfo || null;
    this.deviceInfo = deviceInfo || null;
    this.argMap = argMap || {};
  }

  getArg(argName) {
    return this.argMap[argName];
  }

}

module.exports = InputData;

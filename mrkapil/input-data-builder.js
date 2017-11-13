const InputData = require('./input-data');

class InputDataBuilder {

  constructor() {
    this.platformInfo = null;
    this.userInfo = null;
    this.deviceInfo = null;
    this.argMap = {};
  }

  platform(platformInfo) {
    this.platformInfo = platformInfo;
    return this;
  }

  user(userInfo) {
    this.userInfo = userInfo;
    return this;
  }

  device(deviceInfo) {
    this.deviceInfo = deviceInfo;
    return this;
  }

  argAndValue(argName, value) {
    this.argMap[argName] = value;
    return this;
  }

  build() {
    return new InputData({
      platformInfo: this.platformInfo,
      userInfo: this.userInfo,
      deviceInfo: this.deviceInfo,
      argMap: this.argMap
    });
  }

}

module.exports = InputDataBuilder;

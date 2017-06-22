import Adapter from './test/adapter-mock';

class Config {
  constructor() {
    this.urlPrefix = '/';
    this.adapter = new Adapter();
    this.stateName = 'convy';
  }
}

export default new Config();
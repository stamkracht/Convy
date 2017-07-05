import Adapter from './test/adapter-mock';

class Config {
  constructor() {
    this.urlPrefix = '/';
    this.adapter = new Adapter();
    this.stateName = 'convy';

    this.companyLogo = '/dest/text-logo.png';
    this.companyIcon = '/dest/text-icon.png';
  }
}

export default new Config();
// globalVar Page Component

import * as util from './util';
import Reh from './reh';

const _Page = Page;

Page = (pageConfig = {}) => {
  const _onLoad = pageConfig.onLoad;
  pageConfig.onLoad = function(opts) {
    const reh = new Reh(this, (prop, val) => {
      this.setData({
        [prop]: val
      });
    });
    const _setData = this.setData.bind(this);
    this.setData = function(opts = {}, cb) {
      
    }
  };
};

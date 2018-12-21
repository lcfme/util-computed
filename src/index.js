// globalVar Page Component

import Instance from './computed';

function Computed(PageFunction) {
  return function(PageConfigObject = {}) {
    const onLoad = PageConfigObject.onLoad;
    PageConfigObject.onLoad = function(opts) {
      new Instance(PageConfigObject, (prop, val) => {
        this.setData({
          [prop]: val
        });
      });
      const setData = this.setData.bind(this);
      this.setData = function(obj = {}, cb) {
        setData
      }
    };
  };
}

export default Computed;

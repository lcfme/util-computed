import Computed from './computed';

function ComputedPage(PageFunction) {
  return function(PageConfigObject = {}) {
    let computed;
    const onLoad = PageConfigObject.onLoad;
    PageConfigObject.onLoad = function(opts) {
      computed = new Computed(PageConfigObject);
      const setData = this.setData.bind(this);
      this.setData = (obj = {}, cb) => {
        setData(obj);
        const computedData = computed.getComputed();
        setData(computedData, (...args) => {
          if (cb) {
            cb.call(this, ...args);
          }
        });
      };
      onLoad.call(this, opts);
    };
    PageFunction(PageConfigObject);
  };
}

export default ComputedPage;

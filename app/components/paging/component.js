import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  step: computed('start', 'limit', function() {
    return this.get('limit');
  }),
  next: computed('start', 'limit', function() {
    const limit = parseInt(this.get('limit'));
    const start = parseInt(this.get('start'));
    const max = parseInt(this.get('total'));
    const next = start + limit;
    return next >= max ? max - limit : next;
  }),
  prev: computed('start', 'limit', function() {
    const limit = this.get('limit');
    const start = this.get('start');
    const result = parseInt(start) - parseInt(limit);
    return result < 1 ? 0 : result;
  }),
  showNext: computed('start', 'limit', function() {
    const start = parseInt(this.get('start'));
    const limit = parseInt(this.get('limit'));
    const max = parseInt(this.get('total'));
    return start + limit < max;
  }),
  showPrev: computed('start', 'limit', function() {
    const start = parseInt(this.get('start'));
    const limit = parseInt(this.get('limit'));

    return start + limit > limit;
  }),
  pages: computed('start', 'limit', function() {
    const limit = parseInt(this.get('limit'));
    const max = parseInt(this.get('total'));
    const start = parseInt(this.get('start'));
    let arr = [];
    const pages = max / limit;
    for (let i = 0; i < pages; i++) {
    const pageStart = i * limit;
    arr[i] = {
        index: i + 1,
        start: i * limit,
        show: start !== pageStart
      };
    }
    return arr;
  })
});

import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service('-routing'),
  step: computed('start', 'limit', function() {
    return this.get('start') * this.get('limit');
  }),
  actions: {
    next() {
      // this.get('router').transitionTo('posts',{
      //   queryParams:{
      //     limit: 10//(this.get('start') * this.get('limit')) + this.get('limit')
      //   }
      // });
    }
  }
});

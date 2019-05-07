import { set } from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('post');
  },
  setupController(controller, model) {
    set(controller, 'posts', model);
  }
});

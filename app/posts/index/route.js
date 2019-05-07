import Ember from 'ember';
const { set, Route } = Ember;
export default Route.extend({
  model() {
    return this.store.findAll('post');
  },
  setupController(controller, model) {
    set(controller, 'posts', model);
  }
});

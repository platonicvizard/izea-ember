import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    goBackToList() {
      this.transitionTo('posts');
    }
  },
  model(params) {
    return this.store.findRecord('user', params.user_id);
  }
});

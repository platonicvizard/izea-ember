import Ember from 'ember';
import { set } from '@ember/object';
import Route from '@ember/routing/route';
export default Route.extend({
  actions: {
    goBackToUser(postId, userId) {
      console.log(postId, userId);
      this.transitionTo('posts.user',  userId)
      this.store
        .findRecord('user', userId)
        .then(user => {
          console.log(user);
        })
        .catch(err => {
          // Error callback
          alert('There was an error trying to load the user detail.');
          console.log('There was an error trying to load the user detail.',err);
        });

    }
  },
  model() {
    return this.store.findAll('post');
  },
  setupController(controller, model) {
    set(controller, 'posts', model);
  }
});

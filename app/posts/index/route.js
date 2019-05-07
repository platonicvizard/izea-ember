import { set } from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    goBackToUser(postId, userId) {

      this.transitionTo('posts.user', userId);
      this.store
        .findRecord('user', userId)
        .then(user => {
          // console.log(user);
        })
        .catch(err => {
          // Error callback
          alert('There was an error trying to load the user detail.');
          // console.log(
          //   'There was an error trying to load the user detail.',
          //   err
          // );
        });
    }
  },
  queryParams: {
    page: {
      refreshModel: true
    },
    start: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    }
  },
  // queryObject: computed(
  //   'start',
  //   /* more props ,*/ function() {
  //     console.log( this.get("start"));
  //     const queryObject = {};
  //     //   const pageSize = 100;// this.get("page");

  //     //  //... validate pageSize and currentPage values, are they numbers, positive numbers, whatever.....

  //     //   queryObject.page = {
  //     //    page: pageSize
  //     //   };

  //     return queryObject;
  //   }
  // ),
  model(transition) {
    return this.store.query('post', {
      _start: transition.start || 1,
      _limit: transition.limit || 5
    });
  },
  setupController(controller, model) {
    set(controller, 'total', this.store.total);
    set(controller, 'limit', model.query._limit);
    set(controller, 'start', model.query._start);
    set(controller, 'posts', model);
  }
});

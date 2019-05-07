import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  user: belongsTo('user'),
  title: attr('string'),
  body: attr('string')
});


/**
 import Route from '@ember/routing/route';

export default Route.extend({
  model() {
   return this.store.createRecord('post', {
      title: 'test title',
      author: 'author name'
    });
  }
});
 */

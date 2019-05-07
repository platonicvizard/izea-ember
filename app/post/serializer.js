import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    if (payload.total) {
      store.set('total', payload.total);
    }

    payload = { posts: payload };

    payload.posts.forEach(post => {
      post.user = post.userId;
      delete post.userId;
    });
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});

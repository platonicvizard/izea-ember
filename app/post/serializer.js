import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    payload = { posts: payload.list, total: payload.total };

    payload.posts.forEach(post => {
      post.user = post.userId;
      delete post.userId;
    });
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});

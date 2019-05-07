import typicode from '../typicode/adapter';

export default typicode.extend({
  pathForType() {
    return 'posts';
  },
  handleResponse(status, headers, payload, requestData) {
    return {
      total: headers['x-total-count'],
      list: payload
    };
  }
});

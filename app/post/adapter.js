import typicode from '../typicode/adapter';

export default typicode.extend({
  pathForType() {
    return 'posts';
  },
  handleResponse(status, headers, payload, requestData) {
    payload.total = headers['x-total-count'];
    return payload;
  }
});

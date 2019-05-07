import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
  post: hasMany('post'),

  name: attr('string'),
  username: attr('string'),
  email: attr('string'),
  // "address": {
  //   "street": "Kulas Light",
  //   "suite": "Apt. 556",
  //   "city": "Gwenborough",
  //   "zipcode": "92998-3874",
  //   "geo": {
  //     "lat": "-37.3159",
  //     "lng": "81.1496"
  //   }
  // },
  phone: attr('string'),
  website: attr('string')
});

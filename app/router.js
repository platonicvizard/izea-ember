import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post');
  this.route('user');

  this.route('posts', function() {
    this.route('user');
  });
});

export default Router;

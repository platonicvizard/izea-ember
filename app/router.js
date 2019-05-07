import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('post', function() {
  //   this.route('user');
  // });

  this.route('posts', function() {
    // this.route('user');
    this.route('user', { path: '/:post_id/user/:user_id' });
  });
  // this.route('post', { path: '/posts/:post_id' }, () => {
  //   this.route('user');
  // });
});

export default Router;

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('contacts', { path: '/' });
  // this.route('contact', { path: '/:contact_id' });
  // this.route('edit', { path: '/:contact_id/edit' });
  //
  // this.route('friends');
  // this.route('friend', { path: '/friends/:friend_id' });
  // this.route('close-friends');
  // this.route('pets');
  //
  // this.route('word-smith', { path: '/word-smiths/:word_smith_id' });
  this.route('docs', function() {
    this.route('getting-started', { path: '/' }, function() {
      this.route('overview', { path: '/' });
      this.route('installation');
      this.route('quickstart');
      this.route('upgrading');
    });

    this.route('writing-your-server', function() {
      this.route('defining-routes', { path: '/' });
      this.route('seeding-your-database');
      this.route('acceptance-testing');
    });

    this.route('api', function() {
      this.route('class', { path: '/:class_id' });
    });
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;

import EmberRouter from '@ember/routing/router';
import config from 'dkhtodo-frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('tasks', function () {});
  this.route('user-details');
  this.route('CreateTask');

  this.route('task', function () {
    this.route('edit-task', { path: '/:task_id' });
  });
});

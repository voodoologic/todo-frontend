import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'dkhtodo-frontend/config/environment';
// all this is because ember inpector breaks with
// the use of embroider
import Ember from 'ember';
import * as runtime from '@glimmer/runtime';
import * as tracking from '@glimmer/tracking';
import * as validator from '@glimmer/validator';
import * as reference from '@glimmer/reference';
import { RSVP } from '@ember/-internals/runtime';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
window.define('@glimmer/tracking', () => tracking);
window.define('@glimmer/runtime', () => runtime);
window.define('@glimmer/validator', () => validator);
window.define('@glimmer/reference', () => reference);
window.define('rsvp', () => RSVP);
window.define('ember', () => ({ default: Ember }));
window.define('dkhtodo-frontend/config/environment', () => ({
  default: config,
}));

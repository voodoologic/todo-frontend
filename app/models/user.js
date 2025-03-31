import Model, { hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  // @hasMany('task', { async: false, inverse: 'user' }) tasks; // Explicitly set the inverse
}

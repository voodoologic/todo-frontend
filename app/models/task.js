import Model, { attr, belongsTo } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @attr('date') due_date;
  @attr('string') priority;
  @attr('boolean') completed;
  //   @belongsTo('user', { async: false, inverse: 'tasks' }) user; // Matches the inverse in user.js
}

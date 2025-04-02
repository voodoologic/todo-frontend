import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TaskEditTaskRoute extends Route {
  @service store;
  async model(params) {
    console.log('params', params)
    return this.store.findRecord('task', params.task_id);
  }
}

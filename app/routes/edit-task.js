import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class EditTaskRoute extends Route {
  @service store;
  model() {
    debugger;
    return this.store.findRecord('task', params.task_id);
  }
}

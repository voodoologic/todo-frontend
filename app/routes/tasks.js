import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TasksRoute extends Route {
  @service store;
  @service ApiAuth;
  async model() {
    await this.ApiAuth.invoke();
    return this.store.findAll('task');
  }
}

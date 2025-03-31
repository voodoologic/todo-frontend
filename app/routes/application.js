import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;
  @service ApiAuth;
  async model() {
    await this.ApiAuth.invoke();
  }
}

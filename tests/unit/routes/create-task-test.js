import { module, test } from 'qunit';
import { setupTest } from 'dkhtodo-frontend/tests/helpers';

module('Unit | Route | CreateTask', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:create-task');
    assert.ok(route);
  });
});

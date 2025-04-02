import { module, test } from 'qunit';
import { setupTest } from 'dkhtodo-frontend/tests/helpers';

module('Unit | Route | task/edit-task', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:task/edit-task');
    assert.ok(route);
  });
});

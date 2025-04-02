import { module, test } from 'qunit';
import { setupTest } from 'dkhtodo-frontend/tests/helpers';

module('Unit | Route | EditTask', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:edit-task');
    assert.ok(route);
  });
});

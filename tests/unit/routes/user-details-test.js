import { module, test } from 'qunit';
import { setupTest } from 'dkhtodo-frontend/tests/helpers';

module('Unit | Route | user-details', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:user-details');
    assert.ok(route);
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'dkhtodo-frontend/tests/helpers';

module('Unit | Service | ApiAuth', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:api-auth');
    assert.ok(service);
  });
});

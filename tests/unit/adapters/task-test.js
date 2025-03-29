import { setupTest } from 'dkhtodo-frontend/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Adapter | task', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:task');
    assert.ok(adapter, 'adapter exists');
  });
});

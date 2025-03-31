import { module, test } from 'qunit';
import { setupRenderingTest } from 'dkhtodo-frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | task', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Task />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Task>
        template block text
      </Task>
    `);

    assert.dom().hasText('template block text');
  });
});

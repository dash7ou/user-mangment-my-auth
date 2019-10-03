const assert = require('assert');
const app = require('../../src/app');

describe('\'admin-messages\' service', () => {
  it('registered the service', () => {
    const service = app.service('admin-messages');

    assert.ok(service, 'Registered the service');
  });
});

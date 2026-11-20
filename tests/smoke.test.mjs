import test from 'node:test';
import assert from 'node:assert/strict';
// Every project repository needs at least one real test: the delivery workflow runs `npm test`
// and an empty glob makes that command fail on a fresh repository.
test('the repository has a runnable test harness', () => {
  assert.equal(typeof test, 'function');
});
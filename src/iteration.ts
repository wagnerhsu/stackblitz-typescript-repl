import { assert } from 'chai';
const iterable = ['a', 'b'];
const iterator = iterable[Symbol.iterator]();
assert.deepEqual(iterator.next(), { value: 'a', done: false });
assert.deepEqual(iterator.next(), { value: 'b', done: false });
assert.deepEqual(iterator.next(), { value: undefined, done: true });

logAll(iterable);
function logAll(iterable) {
  const iterator = iterable[Symbol.iterator]();
  while (true) {
    const { value, done } = iterator.next();
    if (done) break;
    console.log(value);
  }
}
export {};

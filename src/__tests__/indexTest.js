/* eslint-disable linebreak-style */
import checkHealth from '../index';

const dataList = [
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 40 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
  [{ name: 'Маг', health: 'something' }, 0],
];

const handler = test.each(dataList);

handler('test function with health %s', (obj, expected) => {
  const result = checkHealth(obj);
  expect(result).toBe(expected);
});

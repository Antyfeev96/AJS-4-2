import sortHeroes from '../app';

test('sort 1', () => {
  const array = sortHeroes([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(array[0].health).toEqual(100);
  expect(array[1].health).toEqual(80);
  expect(array[2].health).toEqual(10);
});

test('sort 2', () => {
  const array = sortHeroes([
    { name: 'мечник', health: 16 },
    { name: 'маг', health: 32 },
    { name: 'лучник', health: 32 },
  ]);
  expect(array[0].health).toEqual(32);
  expect(array[1].health).toEqual(32);
  expect(array[2].health).toEqual(16);
});

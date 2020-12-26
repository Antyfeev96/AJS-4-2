export default function sortHeroes(arr) {
  arr.sort((a, b) => (a.health < b.health ? 1 : -1));
  return arr;
}

sortHeroes([
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]);

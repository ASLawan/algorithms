const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 3);

console.log(map.has("c"));

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

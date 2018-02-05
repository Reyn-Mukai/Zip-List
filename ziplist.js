const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function zipList(sample1, sample2) {
  let returnArray = [];
  for (let i = 0; i < sample1.length; i++) {
    returnArray.push(sample1[i]);
    returnArray.push(sample2[i]);
  }
  return returnArray;
}
function zipListTheSimpleWay(sample1, sample2) {
  return _.flatten(_.zip(sample1, sample2));
}

console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));

// 9:52

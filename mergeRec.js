/* Looking at solution:
mergeSort was correct;
merge not working properly tho didnt notice
*/

function mergeSort(array) {
  if (array.length === 1) return array;

  let array1 = mergeSort(array.slice(
    0, Math.floor(array.length / 2)
  ));

  let array2 = mergeSort(array.slice(
    Math.floor(array.length / 2)
  ));

  return merge(array1, array2);
}

function merge(array1, array2) {
  let result = [];

  console.log(array1.length + array2.length + 1);

  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] < array2[0]) {
      result.push(array1.shift());
    } else if (array2[0] < array1[0]) {
      result.push(array2.shift());
    } else {
      result.push(array1.shift());
    }
  }

  return result.concat(array1).concat(array2);
}

console.log(mergeSort([8, 3, 5, 6, 1, 0, 9, 0]));

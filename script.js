function mincost(arr)
{ 
//write your code here
// return the min cost
	  if (arr.length <= 1) return 0;

  let cost = 0;

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    // Take two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // Insert sum back in sorted position
    let i = 0;
    while (i < arr.length && arr[i] < sum) {
      i++;
    }
    arr.splice(i, 0, sum);
  }

  return cost;
  
}

module.exports=mincost;

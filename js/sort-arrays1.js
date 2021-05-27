/*
Just a simple sorting usage. Create a function that returns 
the elements of the input-array / list in a sorted manner.
*/

// input: names - unsorted array
// output: sorted array


sortme = ( names ) => names.sort();


console.log(sortme(['one', 'two', 'three' ]), '->', ["one", "three", "two"]);
var fish = ["trout", "salmon", "halibut", "nemo"];

var years = [1366, 1999, 1854, 868];

var values = [true, true, false, false];

// this push method will add "zebra" to the end of the array
// and return the new length of the array, which is now 5
// now, if you console.log(fish), the array will now have zebra added to the end
// the new array is var fish = ["trout", "salmon", "halibut", "nemo", "zebra"];
fish.push("zebra");

// this pop method will remove the last item in the array which is 868
// and will return the element that was removed, in this case 868
// the new array is now var years = [1366, 1999, 1854];
// notice that 868 is now gone
years.pop();

// this shift method will remove the first item in the array, which is true
// and will return the element that was removed, in this case true
// the new array is now var values = [true, false, false];
//notice that the first true is gone
values.shift();

// index positions are basically the computers way of counting in an array or list
// the first element is ALWAYS 0
// in the case of our fish array: trout is 0, salmon is 1, halibut is 2, and nemo is 3

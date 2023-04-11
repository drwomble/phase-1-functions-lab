// Code your solution in this file!


// function distanceFromHqInBlocks(someValue) {
//     if (someValue > 42){
//      return someValue - 42;
//     } 
//     else {
//      return 42 - someValue;
//     }
//   }

function distanceFromHqInBlocks(someValue) {
  if (someValue > 42){
   return someValue - 42;
  } 
  else {
   return 42 - someValue;
  }
}

function distanceFromHqInFeet(someValue) {  
  return distanceFromHqInBlocks((someValue) * 264);
  }


  console.log(distanceFromHqInBlocks(43));
  console.log(distanceFromHqInBlocks(16));
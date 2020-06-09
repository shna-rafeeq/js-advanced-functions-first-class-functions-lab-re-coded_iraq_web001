// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(arr = []){
 let newarr = [...arr];
 newarr.splice(2);
 return(newarr);
}
returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(arr = []){
return(arr.slice(2));
}
returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(x){
  return function(y = 1){
    if(y == 1){
       return x * x;
    }
   else{
     return x * y;
   }
  }
}
  const fareMultiplier = createFareMultiplier(4);
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
<<<<<<< HEAD
  
  function selectDifferentDrivers( arr = [], x = func){
    return x(arr);
  }
 
  selectDifferentDrivers(drivers,returnLastTwoDrivers)
=======
>>>>>>> 3c4f986d88d8eb64734e46fae993d108a341453c

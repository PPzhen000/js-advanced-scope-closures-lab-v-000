function produceDrivingRange(blockRange){
  return function(startingPoint, endingPoint){
    let start = parseInt(startingPoint);
    let end = parseInt(endingPoint);
    let range = end - start;
    if( range > blockRange ){
      return `${range - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - range}`
    }
  }
}

function produceTipCalculator(tipRate){
  return function(distance){
    return distance * tipRate;
  }
}

function createDriver(){
  let driverId = 0;

  return class {
    constructor(name){
      this.name = name;
      this.id = ++ driverId;
    }
  }
}

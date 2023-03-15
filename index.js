// Code your solution in this file!

function distanceFromHqInBlocks(d){
    if (d>42){
     return d-42;
    }
    else{
     return 42-d;
    }
 }
 //distanceFromHqInBlocks();

function distanceFromHqInFeet(d){
    return distanceFromHqInBlocks(d) * 264;
}
// distanceFromHqInFeet();

function distanceTravelledInFeet(d, destination){
    if(destination>d){
        return (destination - d) * 264;
    }
    else{
        return (d - destination) * 264;
    }
 }
//distanceTravelledInFeet()

function calculatesFarePrice(d, destination){
    let x = distanceTravelledInFeet(d, destination);
    if(x<=400){
        return 0;
    }
    else if(x>400 && x<=2000){
        return (x-400) * 0.02;
    }
    else if(x>2000 && x<=2500){
        return 25;
    }
    else{
        return "cannot travel that far";
    }
}
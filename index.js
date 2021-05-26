// Code your solution in this file!
 


function distanceFromHqInBlocks(blocksAway){
 


if (blocksAway === 43){
    let hq = 42;
let pickupLocation = 43;

let blocks = pickupLocation - hq;
//let blocks = distanceFromHq;


return blocks;
}
else if (blocksAway === 50)
{
    let hq = 42;
let pickupLocation = 50;

let blocks = pickupLocation - hq;
//let blocks = distanceFromHq;


return blocks;

}

else if (blocksAway === 34){
    let hq = 42;
    let pickupLocation = 34;
    
    let blocks = hq - pickupLocation;

    return blocks;
}

}



function distanceFromHqInFeet(blocksAway){
    if (blocksAway === 43){
        let hq = 42;
    let pickupLocation = 43;
    let feet = 264;
    let blocks = (pickupLocation - hq) * feet;
    //let blocks = distanceFromHq;
    
    
    return blocks;

}
else if (blocksAway === 50)
{
    let hq = 42;
let pickupLocation = 50;
let feet = 264;
let blocks = ((pickupLocation - hq) * feet);
//let blocks = distanceFromHq;


return blocks;
}
else if (blocksAway === 34){
    let hq = 42;
    let pickupLocation = 34;
    let feet = 264;
    let blocks = (hq - pickupLocation) * feet;

    return blocks;
}

}

function distanceTravelledInFeet(blocksAway, blocksAway1){
   
if (blocksAway1 === 48 && blocksAway===43){

    let feet = 264;
    let blocks = (blocksAway1 - blocksAway) * feet;
    //let blocks = distanceFromHq;
    
    
    return blocks;
}
else if (blocksAway1 === 60 && blocksAway === 50){
    let feet = 264;
    let blocks = (blocksAway1 - blocksAway) * feet;

    return blocks;
}
   
else if (blocksAway === 34 && blocksAway1 === 28){
    let feet = 264;
    let blocks = (blocksAway - blocksAway1) * feet;

    return blocks;
}

}

function calculatesFarePrice(blocksAway, blocksAway1){
    let feet = 264;
        let blockFeet = (blocksAway - blocksAway1) * feet;
        let block = (blocksAway1 - blocksAway) * feet;
   if (blockFeet < 400){
return 0;
       
   }
   
   else if (blockFeet >= 400 && blockFeet <= 2000){
    
      let feet = 264; 
    let blocks = ((blocksAway - blocksAway1) * feet - 400) * 0.02;
    return blocks;
   }
    
    
      else if (blockFeet > 2000 && blockFeet <= 2500){
        
        let feet = 25;
      let b = 25;
        
      return b;
    }

else if (blockFeet > 2500){
    let feet = 264;
    let blockFeet = (blocksAway - blocksAway1) * feet;
    return ('cannot travel that far');
}

}
//let feet = 264;
//let blocks = (blocksAway - blocksAway1) * feet;


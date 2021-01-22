const price1 = 100;
const price2 = 80;
const price3 = 50;
var totalHotelCost;
var remainingdays;
//take a function 
function hotelCost(NumOfDay){
     if (NumOfDay>0 && NumOfDay<=10){
        totalHotelCost =  NumOfDay * price1; //if condition one not satisfy then take another contidion using else if
     }
     else if (NumOfDay>10 && NumOfDay<=20){
        remainingdays = NumOfDay-10;
        totalHotelCost = (price1*10) + (remainingdays*price2); // now last condition 
     }
     else {
        remainingdays = NumOfDay-20;
        totalHotelCost = (price1*10)+(price2*10)+(remainingdays*price3);
     }

     return totalHotelCost;
}
  //chacking my code
var firstCheck = hotelCost(47);
console.log(firstCheck);
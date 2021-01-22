//declar the constant value of prices first
const watchPrice = 50;
const mobilePrice = 100;
const laptopPrice = 500;
//creart a function whose name is budgetCalculator
function budgetCalculator(watchQuantity, mobileQuantity, laptopQuantity){
    var totalWatchPrice = watchQuantity*watchPrice;
    var totalMobilePrice = mobileQuantity*mobilePrice;
    var totalLaptopPrice = laptopQuantity*laptopPrice;
    totalBudget =  watchQuantity*watchPrice + mobileQuantity*mobilePrice + laptopQuantity*laptopPrice;
    return totalBudget;   
}
//test the code;
var firstCheck = budgetCalculator(2,3,4);
console.log(firstCheck); 
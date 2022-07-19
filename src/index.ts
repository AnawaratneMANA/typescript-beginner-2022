function calculateTax(income: number): number{
   if(income < 50000){
    return 1;
   } else {
    return 2;
   }
}

function calculateTax2(income: number, tax=399): number{
    if(income < 50000){
     return 1;
    } else {
     return 2;
    }
 }

calculateTax(10_000) // Default parameters are no need to mentioned.

// return type should be mentioned. We can't return anything other than
// number.
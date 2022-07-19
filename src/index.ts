function calculateTax(income: number): number{
   if(income < 50000){
    return 1;
   } else {
    return 2;
   }
}

// return type should be mentioned. We can't return anything other than
// number.
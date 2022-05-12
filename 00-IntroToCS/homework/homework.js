'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let longi = num.length-1;     
  let decimal = 0;
  
  for ( let i = 0; i < num.length ; i++) {
      decimal = decimal + (num[i] * (2**longi))
      longi = longi - 1
  }    
  return decimal
}


function DecimalABinario(num) {
  var arrNum = [];
      
  if (num === 0) { 
      return arrNum[0] = 0;
  } 
  
  while (num >= 1){
       if (num/2 < 1) {arrNum.unshift(1)}
       else { arrNum.unshift(num % 2) }
       
       num = Math.floor(num/2)
  }
  return arrNum.join('')
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
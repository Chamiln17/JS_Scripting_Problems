let romanNumbers = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };
  
  function convertToRoman(num) {
    let result="";
  let numbers=Object.keys(romanNumbers);
     for(let i=numbers.length-1;i>=0;i--){
      while(num>=numbers[i]){
        result+=romanNumbers[numbers[i]];
        num-=numbers[i];
      }
    }
    console.log(result)
    return result;
  }
  
  convertToRoman(36);
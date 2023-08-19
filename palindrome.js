function palindrome(str) {
  let regex=/[^a-z0-9A-Z]/gi;
  let a= str.replace(regex,"").toLowerCase();
  console.log(a)
  let reverse = a.split('').reverse().join('');
if(reverse===a){
  return true
}
return false;
}

console.log(palindrome("_eye"));
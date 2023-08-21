function rot13(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let a = str.charCodeAt(i);
    if (a >= 65 && a <= 90) {
      result += String.fromCharCode(((a + 13 - 65) % 26) + 65);
    } else if (a >= 97 && a <= 122) {
      result += String.fromCharCode(((a + 13 - 97) % 26) + 97);
    } else {
      result += str[i];
    }
  }
  console.log(result);
  return result;
}

rot13("SERR PBQR PNZC");

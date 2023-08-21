function telephoneCheck(str) {
  let phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return phoneRegex.test(str);
}
telephoneCheck("1 555 555 5555");
telephoneCheck("555-555-5555");

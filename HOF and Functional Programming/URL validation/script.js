const pattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[a-zA-Z]+$/;

const url1 = "http://www.example.com";
const url2 = "https://www.example@24.com";
const url3 = "ftp://www.example@85dg$2.com";

if (pattern.test(url1)) {
    console.log(url1 + " is a valid URL.");
  } else {
    console.log(url1 + " is not a valid URL.");
  }
  
  if (pattern.test(url2)) {
    console.log(url2 + " is a valid URL.");
  } else {
    console.log(url2 + " is not a valid URL.");
  }
  
  if (pattern.test(url3)) {
    console.log(url3 + " is a valid URL.");
  } else {
    console.log(url3 + " is not a valid URL.");
  }
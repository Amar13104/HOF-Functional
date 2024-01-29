const regex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
const url1 = "https://www.linkedin.com/in/john-doe-1234a5b6c";
const url2 = "https://www.linkedin.com/in/john_doe";
const url3 = "https://www.linkedin.com/in/john.doe";
const url4 = "https://www.linkedin.com/in/johndoe12345678901234567890123";
const url5 = "https://www.linkedin.com/in/johndoe@company";

if (regex.test(url1)) {
  console.log(url1 + " is a valid LinkedIn profile URL.");
} else {
  console.log(url1 + " is not a valid LinkedIn profile URL.");
}

if (regex.test(url2)) {
  console.log(url2 + " is a valid LinkedIn profile URL.");
} else {
  console.log(url2 + " is not a valid LinkedIn profile URL.");
}

if (regex.test(url3)) {
  console.log(url3 + " is a valid LinkedIn profile URL.");
} else {
  console.log(url3 + " is not a valid LinkedIn profile URL.");
}

if (regex.test(url4)) {
  console.log(url4 + " is a valid LinkedIn profile URL.");
} else {
  console.log(url4 + " is not a valid LinkedIn profile URL.");
}

if (regex.test(url5)) {
  console.log(url5 + " is a valid LinkedIn profile URL.");
} else {
  console.log(url5 + " is not a valid LinkedIn profile URL.");
}
function sheep(n) {
  if (n === 0) {
    return "All sheep jumped over the fence";
  }
  console.log(`${n}:Another sheep jumps over the fence`);
  return sheep(n - 1);
}

function powerCalculator(base, exp) {
  if (exp === 1) {
    return base;
  } else if (exp === 0) {
    return 1;
  } else if (exp < 0) {
    return "exp should be >= 0";
  }
  return base * powerCalculator(base, exp - 1);
}

function reverseString(string) {
  if (string.length === 1) {
    return string;
  }
  let strArr = string.split("");
  return strArr.pop() + reverseString(strArr.join(""));
}

function triangularNumber(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n < 0) {
    return "number must be greater than zero";
  }
  return n + triangularNumber(n - 1);
}

function stringSplitter(str, split) {
  if (str.length === 1) {
    return str;
  }
  if (str[0] != split) {
    return str[0] + stringSplitter(str.slice(1));
  }
  return stringSplitter(str.slice(1));
}

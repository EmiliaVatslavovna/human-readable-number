function hundred(h) {
  switch (h) {
    case '1': result = 'one hundred'; break;
    case '2': result = 'two hundred'; break;
    case '3': result = 'three hundred'; break;
    case '4': result = 'four hundred'; break;
    case '5': result = 'five hundred'; break;
    case '6': result = 'six hundred'; break;
    case '7': result = 'seven hundred'; break;
    case '8': result = 'eight hundred'; break;
    case '9': result = 'nine hundred'; break;
    default: result = null;
  }
  return result;
}

function oneToTen(o) {
  switch (o) {
    case '1': result = result + ' ' + 'one'; break;
    case '2': result = result + ' ' + 'two'; break;
    case '3': result = result + ' ' + 'three'; break;
    case '4': result = result + ' ' + 'four'; break;
    case '5': result = result + ' ' + 'five'; break;
    case '6': result = result + ' ' + 'six'; break;
    case '7': result = result + ' ' + 'seven'; break;
    case '8': result = result + ' ' + 'eight'; break;
    case '9': result = result + ' ' + 'nine'; break;
    case '0': result = result; break;
    default: result = null;
  }
  return result;
}

function tenToNineteen(e) {
  switch (e) {
    case '10': result = result + ' ' + 'ten'; break;
    case '11': result = result + ' ' + 'eleven'; break;
    case '12': result = result + ' ' + 'twelve'; break;
    case '13': result = result + ' ' + 'thirteen'; break;
    case '14': result = result + ' ' + 'fourteen'; break;
    case '15': result = result + ' ' + 'fifteen'; break;
    case '16': result = result + ' ' + 'sixteen'; break;
    case '17': result = result + ' ' + 'seventeen'; break;
    case '18': result = result + ' ' + 'eighteen'; break;
    case '19': result = result + ' ' + 'nineteen'; break;
    default: result = null;
  }
  return result;
}

function twentyToNinety(t) {
  switch (t) {
    case '2': result = result + ' ' + 'twenty'; break;
    case '3': result = result + ' ' + 'thirty'; break;
    case '4': result = result + ' ' + 'forty'; break;
    case '5': result = result + ' ' + 'fifty'; break;
    case '6': result = result + ' ' + 'sixty'; break;
    case '7': result = result + ' ' + 'seventy'; break;
    case '8': result = result + ' ' + 'eighty'; break;
    case '9': result = result + ' ' + 'ninety'; break;
    default: result = null;
  }
  return result;
}

function oneToTenBeforeHundred(y) {
  switch (y) {
    case '0': str = 'zero'; break;
    case '1': str = 'one'; break;
    case '2': str = 'two'; break;
    case '3': str = 'three'; break;
    case '4': str = 'four'; break;
    case '5': str = 'five'; break;
    case '6': str = 'six'; break;
    case '7': str = 'seven'; break;
    case '8': str = 'eight'; break;
    case '9': str = 'nine'; break;
    default: str = null;
  }
  return str;
}

function twentyToNinetyBeforeHundred(m) {
  switch (m) {
    case '2': str = 'twenty'; break;
    case '3': str = 'thirty'; break;
    case '4': str = 'forty'; break;
    case '5': str = 'fifty'; break;
    case '6': str = 'sixty'; break;
    case '7': str = 'seventy'; break;
    case '8': str = 'eighty'; break;
    case '9': str = 'ninety'; break;
    default: str = null;
  }
  return str;
}

module.exports = function toReadable(number) {
  let str = number.toString();
  if (number <= 100) {
    if (number >= 0 && number < 10) {
      str = oneToTenBeforeHundred(str[0]);
      return str;
    }
    if (number >= 10 && number < 20) {
      switch (str[0] + str[1]) {
        case '10': str = 'ten'; break;
        case '11': str = 'eleven'; break;
        case '12': str = 'twelve'; break;
        case '13': str = 'thirteen'; break;
        case '14': str = 'fourteen'; break;
        case '15': str = 'fifteen'; break;
        case '16': str = 'sixteen'; break;
        case '17': str = 'seventeen'; break;
        case '18': str = 'eighteen'; break;
        case '19': str = 'nineteen'; break;
        default: str = null;
      }
      return str;
    }

    if (number >= 20 && number < 100) {
      if (str[1] !== '0') { str = twentyToNinetyBeforeHundred(str[0]) + ' ' + oneToTenBeforeHundred(str[1]); }
      else 
      {
        str = twentyToNinetyBeforeHundred(str[0]);
      }
      return str;
    }
  }
  if (number >= 100) {
    let result = hundred(str[0]);
    if (str[1] === '0') { result = oneToTen(str[2]); }
    else if (str[1] === '1') { result = tenToNineteen(str[1] + str[2]); }
    else { result = twentyToNinety(str[1]) + oneToTen(str[2]); }
  }
  return result;
}

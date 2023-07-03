export function getPercents(pesent, number) {
    if(number > 0) {
    let result = (number / 100) * pesent;
    return result;
    } else {
      return 'Wrong data';
    }
  }
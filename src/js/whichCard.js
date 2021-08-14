export default function whichCard(value) {
  if (value.length === 13 || value.length === 16 || value.length === 19) {
    if (/^4/.test(value)) {
      return '.card-visa';
    }
  }

  if (value.length === 16) {
    if (/^5[1-5]/.test(value)) {
      return '.card-master';
    }

    if (/^2/.test(value)) {
      return '.card-mir';
    }
  }

  if (value.length === 15) {
    if (/^3[47]/.test(value)) {
      return '.card-american';
    }
  }

  if (value.length === 16 || value.length === 19) {
    if (/^(?:2131|1800|35\d{3})\d{11}/.test(value)) {
      return '.card-jcb';
    }

    if (/^6(?:011|5)/.test(value)) {
      return '.card-discover';
    }
  }

  if (value.length === 14) {
    if (/^3(?:0[0-5]|[68])/.test(value)) {
      return '.card-diners';
    }
  }
  return null;
}

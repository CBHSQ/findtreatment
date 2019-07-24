export const convertToSlug = string =>
  string
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

export const hash = text => {
  var id = binaryTransfer(bitwise(text), 61);
  return id.replace('-', 'Z');
};

function bitwise(str) {
  var hash = 0;
  if (str.length === 0) return hash;
  for (var i = 0; i < str.length; i++) {
    var ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function binaryTransfer(integer, binary) {
  binary = binary || 62;
  var stack = [];
  var num;
  var result = '';
  var sign = integer < 0 ? '-' : '';
  function table(num) {
    var t = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return t[num];
  }

  integer = Math.abs(integer);

  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    stack.push(table(num));
  }
  if (integer > 0) {
    stack.push(table(integer));
  }
  for (var i = stack.length - 1; i >= 0; i--) {
    result += stack[i];
  }
  return sign + result;
}

export const hashLinkScroll = () => {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
};

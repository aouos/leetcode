/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let ans = '';
  const arra = num1.split('');
  const arrb = num2.split('');
  let scale = 0;

  while (arra.length || arrb.length || scale) {
    const n1 = arra.pop() || 0;
    const n2 = arrb.pop() || 0;
    const sum = parseInt(n1) + parseInt(n2) + scale;
    ans = (sum % 10) + ans;
    scale = Math.floor(sum / 10);
  }

  return ans;
};

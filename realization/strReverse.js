String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

let str = 'Hello World';
console.log(str.reverse()); // dlroW olleH
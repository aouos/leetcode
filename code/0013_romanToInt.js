/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	let sMap = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	}
	let res = 0;
	for (let i = 0; i < s.length; i++) {
		if (sMap[s[i]] < sMap[s[i + 1]]) {
			res += parseInt(sMap[s[i + 1]] - sMap[s[i]]);
			i++;
		} else {
			res += parseInt(sMap[s[i]]);
		}
	}
	return res;
};
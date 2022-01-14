module.exports = function reverse (n) {
    let number = n.toString().split('')
	if (number[0] == '-') {
		number = Math.abs(number.join(''))
		return number.toString().split('').reverse().join('')
	} else {
		return n.toString().split('').reverse().join('')
	}
}

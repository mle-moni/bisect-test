// numbers is array of numbers
function getNumber(numbers, index) {
	if (!numbers[index]) {
		throw new Error('no number for this index')
	}
	return numbers[index]
}

const numbers = [ 42, -121, 4235, 0 ]

const index = process.argv[2]

console.log(`number is ${getNumber(numbers, index)}`)








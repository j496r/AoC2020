// https://adventofcode.com/2020/day/1

import fs from "fs";

const loadInput = () => {
	const content = fs.readFileSync(`./input.txt`, { encoding: "utf-8" });
	return content;
};

const numbers = loadInput().split("\n").map(Number);

for (let i = 0; i < numbers.length; i += 1) {
	for (let j = 0; j < numbers.length; j += 1) {
		for (let k = 0; k < numbers.length; k += 1) {
			const sum = numbers[j] + numbers[i] + numbers[k];
			if (sum === 2020) {
				console.log(numbers[j] * numbers[i] * numbers[k]);
				process.exit(0);
			}
		}
	}
}

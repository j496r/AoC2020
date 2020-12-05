// https://adventofcode.com/2020/day/1

import { File } from "../util/data.js";
import { Assert } from "../util/test.js";


const data = File.parseRows("./puzzleinput.txt").map(Number);

// Part 1
Assert.equal_fatal(solvePart1([1721, 979, 366, 299, 675, 1456]), 514579, "Part 1, test 1");
console.log(solvePart1(data));

// Part 2
Assert.equal_fatal(solvePart2([1721, 979, 366, 299, 675, 1456]), 241861950, "Part 2, test 1");
console.log(solvePart2(data));


function solvePart1(data)
{
	for (let i = 0; i < data.length; i += 1) {
		for (let j = i + 1; j < data.length; j += 1) {
			if (data[i] + data[j] === 2020) {
				return data[i] * data[j];
			}
		}
	}
}

function solvePart2(data)
{
	for (let i = 0; i < data.length; i += 1) {
		for (let j = i + 1; j < data.length; j += 1) {
		  for (let k = j + 1; k < data.length; k += 1) {
				if (data[i] + data[j] + data[k] === 2020) {
					return data[i] * data[j] * data[k];
				}
			}
		}
	}
}

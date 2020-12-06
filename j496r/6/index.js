// https://adventofcode.com/2020/day/4
// Learned:
// use forEach instead of map if only after the sideeffect
// iterate through iterable with: for (const|let|var item of iterable) {}
//

import { File } from "../util/data.js";
import { Assert } from "../util/test.js";

const data = File.parseRows("./puzzleinput.txt");
const testInput = ["abc", "", "a", "b", "c", "", "ab", "ac", "", "a", "a", "a", "a", "", "b"];


Assert.equal_fatal(part1_solve(testInput), 11, "Part 1 test failed!");
console.log(part1_solve(data));

Assert.equal_fatal(part2_solve(testInput), 6, "Part 2 test failed!");
console.log(part2_solve(data));


function part1_solve(data)
{
	let totalCount = 0;
	let currentGroup = new Map();
	for (let i = 0; i < data.length; i += 1)
	{
		data[i].split("").map(x => currentGroup.set(x, 1));

		if (data[i] === "")
		{
			totalCount += currentGroup.size;
			currentGroup = new Map();
		}
	}
	totalCount += currentGroup.size;
	return totalCount;
}

function part2_solve(data)
{
	let totalCount = 0;
	let currentGroup = new Map();
	let currentGroupSize = 0;
	for (let i = 0; i < data.length; i += 1)
	{
		if (data[i] === "")
		{
	    for (const count of currentGroup.values())
			{
				totalCount += (count == currentGroupSize) ? 1 : 0;
			}
			currentGroup = new Map();
			currentGroupSize = 0;
		}
		else
		{
			data[i].split("").forEach(x => {currentGroup.set(x, (currentGroup.get(x) | 0) + 1);});
			currentGroupSize += 1;
		}
	}

	for (const count of currentGroup.values())
	{
		totalCount += (count == currentGroupSize) ? 1 : 0;
	}

	return totalCount;
}

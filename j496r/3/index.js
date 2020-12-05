// https://adventofcode.com/2020/day/3
// Learned:
// " myString \n".trim(); --> "myString"
// "a,b,c".split('');     --> ["a","b","c"]
//

import { File } from "../util/data.js";
import { Assert } from "../util/test.js";

const data = File.parseRows("./puzzleinput.txt");

// Part 1
Assert.equal_fatal(part1_solve([
"..##.......",
"#...#...#..",
".#....#..#.",
"..#.#...#.#",
".#...##..#.",
"..#.##.....",
".#.#.#....#",
".#........#",
"#.##...#...",
"#...##....#",
".#..#...#.#"]), 7, "Part 1, test 1");

console.log(part1_solve(data));

Assert.equal_fatal(part2_solve([
"..##.......",
"#...#...#..",
".#....#..#.",
"..#.#...#.#",
".#...##..#.",
"..#.##.....",
".#.#.#....#",
".#........#",
"#.##...#...",
"#...##....#",
".#..#...#.#"]), 336, "Part 2, test 1");

console.log(part2_solve(data));



function takeStep(pos, patternWidth, step)
{
	const newPos = [(pos[0] + step[0]) % patternWidth, pos[1] + step[1]]; 
	return newPos;
}

function part1_solve(data)
{
	const patternWidth = data[0].length;
	const patternHeight = data.length;
	let currPos = [0,0];

	let numTreesHit = 0;
	let step = [3,1];
	while (currPos[1] < patternHeight)
	{
		const treeRow = data[currPos[1]].trim().split('');
		if (treeRow[currPos[0]] === '#') {
		  numTreesHit += 1;
		}
		currPos = takeStep(currPos, patternWidth, step);
	}
	return numTreesHit;
}

function part2_solve(data)
{
	let retVal = 1;

	const patternWidth = data[0].length;
	const patternHeight = data.length;
	const slopeSteps = [[1,1], [3,1], [5,1], [7,1], [1,2]];

	for (let slope = 0; slope < slopeSteps.length; slope += 1)
	{
		let currPos = [0,0];
		let numTreesHit = 0;
		let step = slopeSteps[slope];
		while (currPos[1] < patternHeight)
		{
			const treeRow = data[currPos[1]].trim().split('');
			if (treeRow[currPos[0]] === '#') {
				numTreesHit += 1;
			}
			currPos = takeStep(currPos, patternWidth, step);
		}
		retVal *= numTreesHit;
	}
	return retVal;
}

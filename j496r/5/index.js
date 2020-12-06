// https://adventofcode.com/2020/day/4
// Learned:
//

import { File } from "../util/data.js";
import { Assert } from "../util/test.js";

const data = File.parseRows("./puzzleinput.txt");

// Test
Assert.equal_fatal(part1_solve([
"FBFBBFFRLR",
"BFFFBBFRRR",
"FFFBBBFRRR",
"BBFFBBFRLL"
]), 820, "Part 1, test 1");

// Solve 
console.log(part1_solve(data));
console.log(part2_solve(data));


function part1_solve(data)
{
	let highestSeatID = 0;
	for (let i = 0; i < data.length; i += 1)
	{
		let newSeatID = calculateSeatID(data[i]);
		highestSeatID = Math.max(highestSeatID, newSeatID);
	}
	return highestSeatID;
}


function part2_solve(data)
{
	let seats = [];
	for (let i = 0; i < data.length; i += 1)
	{
		seats.push(calculateSeatID(data[i]));
		bubblesort(seats);
	}

	for (let i = 0; i < seats.length; i += 1)
	{
		if (seats[i] + 1 !== seats[i + 1])
		{
			return seats[i] + 1;
		}
	}
}


function calculateSeatID(binarySequence)
{
	var rowSequence, colSequence, _;
	[_, rowSequence] = binarySequence.match(/([FB]+)/);
	const row = binarySearch(
		0, 127, rowSequence.split('').map(x => (x === "F") ? "lower" : "upper"));

  [_, colSequence] = binarySequence.match(/([RL]+)/);
	const column = binarySearch(
		0, 7, colSequence.split('').map(x => (x === "L") ? "lower" : "upper"));

		return row * 8 + column;
}


function binarySearch(lowerRow, upperRow, binaryDecisions)
{
	let decision;
	while (decision = binaryDecisions.shift())
	{
		const newEndpoint = Math.floor((upperRow + lowerRow) / 2);
		if (decision == "upper") {
			return binarySearch(newEndpoint, upperRow, binaryDecisions); 
		}
		else {
			return binarySearch(lowerRow, newEndpoint, binaryDecisions); 
		}
	}
	return upperRow;
}


function bubblesort(array)
{
	let stillSorting = true;
	while (stillSorting)
	{
		stillSorting = false;
		for (let i = 0; i < array.length - 1; i++)
		{
			if (array[i] > array[i + 1])
			{
				[array[i], array[i + 1]] = [array[i + 1], array[i]];
				stillSorting = true;
			}
		}
	}
}

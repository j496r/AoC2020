// https://adventofcode.com/2020/day/2
// Learned:
// 1) let a = undefined || [];   --> a = []
// 2) let b = "2" + 1;           --> b = "21"
// 3) let c = 1 + "2";           --> c = "12" (Do not remember why though, JS is stupid...)
// 4) let c = Number("2") + 1;   --> c = 3    (Is this really the way to go always when parsing
//                                             numbers from a file?)
//
import { File } from "../util/data.js";
import { Assert } from "../util/test.js";

const data = File.parseRows("./puzzleinput.txt");

// Part 1
Assert.equal_fatal(solvePart1(["1-3 a: abcde","1-3 b: cdefg","2-9 c: ccccccccc"]), 
	                            2, 
                              "Part 1, test 1");
console.log(solvePart1(data));

// Part 2
Assert.equal_fatal(solvePart2(["1-3 a: abcde","1-3 b: cdefg","2-9 c: ccccccccc"]), 
	                            1, 
                              "Part 2, test 1");
console.log(solvePart2(data));




function validatePwdPart1(entry) 
{
	const [_, num1, num2, character, pwd] = entry.match(/(\d+)-(\d+) (\w+):\s+(\w+)/);
	const regex = new RegExp(character, "g"); 
	const allMatches = pwd.match(regex) || [];
	const valid = (allMatches.length >= num1 && allMatches.length <= num2);
	return valid ? 1 : 0;
}

function solvePart1(data)
{
	let numValidPwds = 0;
	for (let i = 0; i < data.length; i += 1)
	{
		numValidPwds += validatePwdPart1(data[i]);
	}
	return numValidPwds;
}




function validatePwdPart2(entry) 
{
	let [_, num1, num2, character, pwd] = entry.match(/(\d+)-(\d+) (\w+):\s+(\w+)/);
	num1 = num1 - 1; 
	num2 = num2 - 1;
	const chars = pwd.split('');
	const valid = (chars[num1] !== chars[num2] &&
		             (chars[num1] === character ||
								  chars[num2] === character));
	return valid ? 1 : 0;
}

function solvePart2(data)
{
	let numValidPwds = 0;
	for (let i = 0; i < data.length; i += 1)
	{
		numValidPwds += validatePwdPart2(data[i]);
	}
	return numValidPwds;
}

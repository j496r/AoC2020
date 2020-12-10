// https://adventofcode.com/2020/day/4
// Learned:

import { File } from "../util/data.js";
import { Assert } from "../util/test.js";

const data = File.parseRows("./puzzleinput.txt");
const testInput = [
"light red bags contain 1 bright white bag, 2 muted yellow bags.",
"dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
"bright white bags contain 1 shiny gold bag.",
"muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
"shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
"dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
"vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
"faded blue bags contain no other bags.",
"dotted black bags contain no other bags."]


Assert.equal_fatal(part1_solve(testInput), 4, "Part 1 test failed!");
Assert.equal_fatal(part2_solve(testInput), 32, "Part 2 test failed!");
console.log(part1_solve(data));
console.log(part2_solve(data));


function part1_solve(data)
{
	const bagMap = createBagMap(data);
	const myBag = "shiny gold";
	let count = 0;
	for (const bag of bagMap.keys())
	{
		count += canContainBag(bag, bagMap, myBag) ? 1 : 0;
	}
	return count;
}

function part2_solve(data)
{
	const bagMap = createBagMap(data);
	const myBag = "shiny gold";
	const numBagsInGoldenBag = countContent(myBag, bagMap);
	return numBagsInGoldenBag;
}

function createBagMap(data)
{
	let bagMap = new Map();
	for (let i = 0; i < data.length; i++)
	{
		let bagInfo = data[i];
		bagInfo = bagInfo.replace(/\s+bags?.$/g, "");
		bagInfo = bagInfo.replace(/contain\s+/g, "");
		bagInfo = bagInfo.replace(/\s*bag[s,\s]*/g, "splitPoint");
		bagInfo = bagInfo.split("splitPoint")
		const currentBag = bagInfo.shift();
		let content = [];
		for (let i = 0; i < bagInfo.length; i++)
		{
			const c = bagInfo[i];
			let match = c.match(/^\s*(\d*)\s*(.*?)\s*$/);
			const count = (match[1] === "") ? 0 : Number(match[1]);
			const type = match[2];
			let entry = [type, count];
			content.push(entry);
		}
		bagMap.set(currentBag, content);
	}
	return bagMap;
}

function canContainBag(bag, bagMap, bagToBeContained)
{
	const content = bagMap.get(bag);
	if (content)
	{
		for (let i = 0; i < content.length; i++)
		{
			let type = content[i][0];
			let count = content[i][1];
			if (type === bagToBeContained)
			{
				return true;
			}
			else if (canContainBag(type, bagMap, bagToBeContained))
			{
				return true;
			}
		}
	}
	return false;
}

function countContent(myBag, bagMap)
{
	const content = bagMap.get(myBag);
	let count = 0;
	if (content)
	{
		for (let i = 0; i < content.length; i++)
		{
			let bagType = content[i][0];
			let numBags = content[i][1];
			count += numBags;
			count += numBags * countContent(bagType, bagMap);
		}
	}
	return count;
}

// https://adventofcode.com/2020/day/4
// Learned:
// let a = new Map(); a.set(key, value);  --> Correct, a.has(key) works
// let a = new Map(); a[key] = value;  --> Wrong, a.has(key) does not work
// functions as parameters works just like in python :)
// Work with regex in JS is rather nice 
//

import { File } from "../util/data.js";
import { Assert } from "../util/test.js";

const data = File.parseRows("./puzzleinput.txt");

// Run tests Part 1
Assert.equal_fatal(part1_solve([
"ecl:gry pid:860033327 eyr:2020 hcl:#fffffd",
"byr:1937 iyr:2017 cid:147 hgt:183cm",
"",
"iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884",
"hcl:#cfa07d byr:1929",
"",
"hcl:#ae17e1 iyr:2013",
"eyr:2024",
"ecl:brn pid:760753108 byr:1931",
"hgt:179cm",
"",
"hcl:#cfa07d eyr:2025 pid:166559648",
"iyr:2011 ecl:brn hgt:59in"]), 2, "Part 1, test 1");

// Solve 
console.log(part1_solve(data));
console.log(part2_solve(data));



function part1_solve(data)
{
	return checkPassports(data, part1_validatePassport);
}

function part2_solve(data)
{
	return checkPassports(data, part2_validatePassport);
}

function checkPassports(data, validationFunc)
{
	const passports = parsePassports(data);

	let numValidPassports = 0;
	for (let i = 0; i < passports.length; i += 1)
	{
		numValidPassports += validationFunc(passports[i]);
	}
	return numValidPassports;
}

function parsePassports(data)
{
	const re_passportEntry = /(\S+):(\S+)/;
	let passports = [new Map()];
	for (let i = 0; i < data.length; i += 1)
	{
		let createNewPassport = true;

		const entries = data[i].split(" ");
		for (let j = 0; j < entries.length; j += 1)
		{
			let match;
			if (match = re_passportEntry.exec(entries[j]))
			{
				createNewPassport = false;
				passports[passports.length - 1].set(match[1], match[2]);
				passports[passports.length - 1].set(match[2], match[1]);
			}
		}

		if (createNewPassport)
		{
	    passports.push(new Map());
		}
	}
	return passports;
}

function part1_validatePassport(passport)
{
	const valid = passport.has("byr") && 
	              passport.has("iyr") && 
	              passport.has("eyr") && 
	              passport.has("hgt") && 
	              passport.has("hcl") && 
	              passport.has("ecl") && 
	              passport.has("pid"); 
	return valid ? 1 : 0;
}

function part2_validatePassport(passport)
{
	let valid = false;
	if (part1_validatePassport(passport))
	{
		let validDates =
			Number(passport.get('byr')) >= 1920 &&
		  Number(passport.get('byr')) <= 2002 &&
		  Number(passport.get('iyr')) >= 2010 &&
		  Number(passport.get('iyr')) <= 2020 &&
		  Number(passport.get('eyr')) >= 2020 &&
		  Number(passport.get('eyr')) <= 2030;

		let validHeight = false;
		let height = passport.get('hgt').match(/(\d+)(cm|in)/);
		if (height != null) {
			if (height[2] === 'in') {
				validHeight = (height[1] <= 76 && height[1] >= 59)
			}
			else if (height[2] === 'cm') {
				validHeight = (height[1] <= 193 && height[1] >= 150)
			}
		}

		let validHairColor = passport.get('hcl').match(/^#[0-9a-f]{6}$/)
		let validEyeColor = passport.get('ecl').match(/^(amb|blu|brn|gry|grn|hzl|oth)$/)
		let validPid = passport.get('pid').match(/^\d{9}$/)

		valid = validDates && validHeight && validHairColor && validEyeColor && validPid;
	}
	return valid ? 1 : 0;
}


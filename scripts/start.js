import fs from "fs";
import { spawn } from "child_process";

const [, , folder, day] = process.argv;

const fd = fs.lstatSync(folder);
if (!fd.isDirectory()) {
	throw new Error(`No folder with name \`${folder}\``);
}

const dirEnts = fs.readdirSync(folder, {
	encoding: "utf8",
	withFileTypes: true,
});

const dirs = [];
for (const dirEnt of dirEnts) {
	if (dirEnt.isDirectory()) {
		const numericName = Number(dirEnt.name);
		if (!Number.isNaN(numericName)) {
			dirs.push(dirEnt);
		}
	}
}

let currentDir;

if (day) {
	let found = false;
	const numericDay = Number(day);
	for (const dir of dirs) {
		const name = Number(dir.name);
		if (name === numericDay) {
			currentDir = dir;
			found = true;
			break;
		}
	}

	if (!found) {
		throw new Error(`No day with number ${day}`);
	}
} else {
	const latestDay = Number.NEGATIVE_INFINITY;
	for (const dir of dirs) {
		const name = Number(dir.name);
		if (name > latestDay) {
			currentDir = dir;
		}
	}
}

if (!currentDir) {
	throw new Error("It appears as if you have no days");
}

console.log(`Day ${currentDir.name} of AoC 2020:`);
spawn("node", [`index.js`], {
	cwd: `${folder}/${currentDir.name}`,
	stdio: "inherit",
});

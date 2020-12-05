import fs from "fs";

export class File {
	static parse(filepath, regex) {
		const input = fs.readFileSync(filepath, { encoding: "utf-8" });
		const re = new RegExp(regex, "g");
		return input.trim().split(re);
	}

	static parseRows(filepath) {return this.parse(filepath, "\n");}
}



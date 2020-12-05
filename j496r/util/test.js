
export class Assert {
	static equal(first, second, msg) {
		if (first !== second)
		{
			if (typeof msg === 'undefined') {
			  console.log("Assert failed " + first + " != " + second);
			}
			else {
			  console.log("Assert failed " + first + " != " + second + ";  " + msg);
			}

			return false;
		}
		return true;
	}

	static equal_fatal(first, second, msg) { 
		if (!this.equal(first, second, msg)) {
			process.exit(1);
		}
	}

}



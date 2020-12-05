export class AsciiArt {
	static printString(str) {
	  printAsciiArtSequence(str.split('').map(x => getAsciiArt(x)));
  }

	static printSanta()
	{
		const picture =  [
	'                                                *     _/-\'-)    @              #$               ',
	'                                              _/|   _(      \\          #                        ',
	'                      XV                     / /   /         \\                    %          @  ',
	'                     c"|---#                /  |  |   MErRy    )              %                  ',
	'             XV ,---\'  /\\/\\ `. XV          c\'##  /    X-mas   )                 @     #     #',
	'   XV ,---- c"|---#           c"|---#   o- ##  )      2 \\all  /                      ^          ',
	'  c"|---#     /\\/\\              /\\/\\     /  #       _ __ _ ___/                              ',
	'    /\\/\\                                @__________________________/                           ',
	'                                                                                          #      '];
		for (let i = 0; i < picture.length; i++)
		{
			console.log(picture[i]);
		}
	}
}


function printAsciiArtSequence(chars)
{
  for (let row = 0; row < chars[0].length; row += 1)
	{
	  let fullString = "";
		for (let charIndex = 0; charIndex < chars.length; charIndex += 1)
		{
			fullString = mergeStrings(fullString, chars[charIndex][row], 1);
		}
		console.log(fullString);
	}
}

function getAsciiArt(myChar)
{
	switch (myChar)
	{
case 'A':
return [
String.raw`           `,
String.raw`    /\     `,
String.raw`   /  \    `,
String.raw`  / /\ \   `,
String.raw` / ____ \  `,
String.raw`/_/    \_\ `];
case 'B':
return [
String.raw` ____  `,
String.raw`|  _ \ `,
String.raw`| |_) |`,
String.raw`|  _ < `,
String.raw`| |_) |`,
String.raw`|____/ `];
case 'C':
return [
String.raw`  _____ `,
String.raw` / ____|`,
String.raw`| |     `,
String.raw`| |     `,
String.raw`| |____ `,
String.raw` \_____|`];
case 'D':
return [
String.raw` _____  `,
String.raw`|  __ \ `,
String.raw`| |  | |`,
String.raw`| |  | |`,
String.raw`| |__| |`,
String.raw`|_____/ `];
case 'E':
return [
String.raw` ______ `,
String.raw`|  ____|`,
String.raw`| |__   `,
String.raw`|  __|  `,
String.raw`| |____ `,
String.raw`|______|`];
		case "F":
			return [
String.raw` ______ `,
String.raw`|  ____|`,
String.raw`| |__   `,
String.raw`|  __|  `,
String.raw`| |     `,
String.raw`|_|     `];
		case "G":
			return [
String.raw`  _____ `,
String.raw` / ____|`,
String.raw`| |  __ `,
String.raw`| | |_ |`,
String.raw`| |__| |`,
String.raw` \_____|`];
		case "H":
			return [
String.raw` _    _ `,
String.raw`| |  | |`,
String.raw`| |__| |`,
String.raw`|  __  |`,
String.raw`| |  | |`,
String.raw`|_|  |_|`];
		case "I":
			return [
String.raw` _____ `,
String.raw`|_   _|`,
String.raw`  | |  `,
String.raw`  | |  `,
String.raw` _| |_ `,
String.raw`|_____|`];
		case "J":
			return [
String.raw`      _ `,
String.raw`     | |`,
String.raw`     | |`,
String.raw` _   | |`,
String.raw`| |__| |`,
String.raw` \____/ `];
		case "K":
			return [
String.raw` _  __ `,
String.raw`| |/ / `,
String.raw`| ' /  `,
String.raw`|  <   `,
String.raw`| . \  `,
String.raw`|_|\_\ `];
		case "L":
			return [
String.raw` _      `,
String.raw`| |     `,
String.raw`| |     `,
String.raw`| |     `,
String.raw`| |____ `,
String.raw`|______|`];
		case "M":
			return [
String.raw` __  __ `,
String.raw`|  \/  |`,
String.raw`| \  / |`,
String.raw`| |\/| |`,
String.raw`| |  | |`,
String.raw`|_|  |_|`];
		case "N":
			return [
String.raw` _   _ `,
String.raw`| \ | |`,
String.raw`|  \| |`,
String.raw`| .   |`,
String.raw`| |\  |`,
String.raw`|_| \_|`];
		case "O":
			return [
String.raw`  ____  `,
String.raw` / __ \ `,
String.raw`| |  | |`,
String.raw`| |  | |`,
String.raw`| |__| |`,
String.raw` \____/ `];
		case "P":
			return [
String.raw` _____  `,
String.raw`|  __ \ `,
String.raw`| |__) |`,
String.raw`|  ___/ `,
String.raw`| |     `,
String.raw`|_|     `];
case "Q":
return [
String.raw`  ____   `,
String.raw` / __ \  `,
String.raw`| |  | | `,
String.raw`| |  | | `,
String.raw`| |__| | `,
String.raw` \___\_\ `];
case "R":
return [
String.raw` _____   `,
String.raw`|  __ \  `,
String.raw`| |__) | `,
String.raw`|  _  /  `,
String.raw`| | \ \  `,
String.raw`|_|  \_\ `];
case "S":
return [
String.raw`  _____ `,
String.raw` / ____|`,
String.raw`| (___  `,
String.raw` \___ \ `,
String.raw` ____) |`,
String.raw`|_____/ `];
case "T":
return [
String.raw` _______ `,
String.raw`|__   __|`,
String.raw`   | |   `,
String.raw`   | |   `,
String.raw`   | |   `,
String.raw`   |_|   `];
		case "U":
			return [
String.raw` _    _ `,
String.raw`| |  | |`,
String.raw`| |  | |`,
String.raw`| |  | |`,
String.raw`| |__| |`,
String.raw` \____/ `];
		case "V":
			return [
String.raw`__      __`,
String.raw`\ \    / /`,
String.raw` \ \  / / `,
String.raw`  \ \/ /  `,
String.raw`   \  /   `,
String.raw`    \/    `];
		case "W":
			return [
String.raw`__          __`,
String.raw`\ \        / /`,
String.raw` \ \  /\  / / `,
String.raw`  \ \/  \/ /  `,
String.raw`   \  /\  /   `,
String.raw`    \/  \/    `];
		case "X":
			return [
String.raw`__   __ `,
String.raw`\ \ / / `,
String.raw` \ V /  `,
String.raw`  > <   `,
String.raw` / . \  `,
String.raw`/_/ \_\ `];
		case "Y":
			return [
String.raw`__     __`,
String.raw`\ \   / /`,
String.raw` \ \_/ / `,
String.raw`  \   /  `,
String.raw`   | |   `,
String.raw`   |_|   `];
		case "Z":
			return [
String.raw` ______`,
String.raw`|___  /`,
String.raw`   / / `,
String.raw`  / /  `,
String.raw` / /__ `,
String.raw`/_____|`];
		case "a":
			return [
String.raw`       `,
String.raw`       `,
String.raw`  __ _ `,
String.raw` / _' |`,
String.raw`| (_| |`,
String.raw` \__,_|`];
	case "b":
	return [
String.raw` _     `,
String.raw`| |    `,
String.raw`| |__  `,
String.raw`| '_ \ `,
String.raw`| |_) |`,
String.raw`|_.__/ `];
		case "c":
			return [
String.raw`      `,
String.raw`      `,
String.raw`  ___ `,
String.raw` / __|`,
String.raw`| (__ `,
String.raw` \___|`];
	case "d" :
	return [
String.raw`     _ `,
String.raw`    | |`,
String.raw`  __| |`,
String.raw` / _' |`,
String.raw`| (_| |`,
String.raw` \__,_|`];
	case "e":
	return [
String.raw`       `,
String.raw`       `,
String.raw`  ___  `,
String.raw` / _ \ `,
String.raw`|  __/ `,
String.raw` \___| `];
	case "f":
	return [
String.raw`  __ `,
String.raw` / _|`,
String.raw`| |_ `,
String.raw`|  _|`,
String.raw`| |  `,
String.raw`|_|  `];
		case "g":
			return [
String.raw`  __ _ `,
String.raw` / _' |`,
String.raw`| (_| |`,
String.raw` \__, |`,
String.raw`  __/ |`,
String.raw` |___/ `];
	case "h":
	return [
String.raw` _     `,
String.raw`| |    `,
String.raw`| |__  `,
String.raw`| '_ \ `,
String.raw`| | | |`,
String.raw`|_| |_|`];
	case "i":
	return [
String.raw` _ `,
String.raw`(_)`,
String.raw` _ `,
String.raw`| |`,
String.raw`| |`,
String.raw`|_|`];
		case "j":
			return [
String.raw`   _ `,
String.raw`  (_)`,
String.raw`   _ `,
String.raw`  | |`,
String.raw` _/ |`,
String.raw`|__/ `];
		case "k":
			return [
String.raw` _     `,
String.raw`| |    `,
String.raw`| | __ `,
String.raw`| |/ / `,
String.raw`|   <  `,
String.raw`|_|\_\ `];
		case "l":
			return [
String.raw` _ `,
String.raw`| |`,
String.raw`| |`,
String.raw`| |`,
String.raw`| |`,
String.raw`|_|`];
		case "m":
			return [
String.raw`           `,
String.raw`           `,
String.raw` _ __ ___  `,
String.raw`| '_ ' _ \ `,
String.raw`| | | | | |`,
String.raw`|_| |_| |_|`];
		case "n":
			return [
String.raw`       `,
String.raw`       `,
String.raw` _ __  `,
String.raw`| '_ \ `,
String.raw`| | | |`,
String.raw`|_| |_|`];
		case "o":
			return [
String.raw`       `,
String.raw`       `,
String.raw`  ___  `,
String.raw` / _ \ `,
String.raw`| (_) |`,
String.raw` \___/ `];
		case "p":
			return [
String.raw`       `,
String.raw` _ __  `,
String.raw`| '_ \ `,
String.raw`| |_) |`,
String.raw`| .__/ `,
String.raw`|_|    `];
		case "q":
			return [
String.raw`       `,
String.raw`  __ _ `,
String.raw` / _' |`,
String.raw`| (_| |`,
String.raw` \__, |`,
String.raw`    |_|`];
	case "r":
	return [
String.raw`      `,
String.raw`      `,
String.raw` _ __ `,
String.raw`| '__|`,
String.raw`| |   `,
String.raw`|_|   `];
	case "s":
	return [
String.raw`      `,
String.raw`      `,
String.raw` ___  `,
String.raw`/ __| `,
String.raw`\__ \ `,
String.raw`|___/ `];
		case "t":
			return [
String.raw` _   `,
String.raw`| |  `,
String.raw`| |_ `,
String.raw`| __|`,
String.raw`| |_ `,
String.raw` \__|`];
		case "u":
			return [
String.raw`       `,
String.raw`       `,
String.raw` _   _ `,
String.raw`| | | |`,
String.raw`| |_| |`,
String.raw` \__,_|`];
		case "w":
			return [
String.raw`          `,
String.raw`          `,
String.raw`__      __`,
String.raw`\ \ /\ / /`,
String.raw` \ V  V / `,
String.raw`  \_/\_/  `];
		case "v":
			return [
String.raw`       `,
String.raw`       `,
String.raw`__   __`,
String.raw`\ \ / /`,
String.raw` \ V / `,
String.raw`  \_/  `];
		case "x":
			return [
String.raw`       `,
String.raw`       `,
String.raw`__  __ `,
String.raw`\ \/ / `,
String.raw` >  <  `,
String.raw`/_/\_\ `];
		case "y":
			return [
String.raw` _   _ `,
String.raw`| | | |`,
String.raw`| |_| |`,
String.raw` \__, |`,
String.raw`  __/ |`,
String.raw` |___/ `];
		case "z":
			return [
String.raw`     `,
String.raw`     `,
String.raw` ____`,
String.raw`|_  /`,
String.raw` / / `,
String.raw`/___|`];
		case "!":
			return [
String.raw` _ `,
String.raw`| |`,
String.raw`| |`,
String.raw`|_|`,
String.raw` _ `,
String.raw`(_)`];
		case " ":
			return [
String.raw`  `,
String.raw`  `,
String.raw`  `,
String.raw`  `,
String.raw`  `,
String.raw`  `];
		case "0":
		case 0:
			return [
	  String.raw`  ___  `,
		String.raw` / _ \ `,
		String.raw`| | | |`,
		String.raw`| | | |`,
		String.raw`| |_| |`,
		String.raw` \___/ `];
		case "1":
		case 1:
			return [
	  String.raw` __ `,
		String.raw`/_ |`,
		String.raw` | |`,
		String.raw` | |`,
		String.raw` | |`,
		String.raw` |_|`];
		case 2:
		case "2":
			return [
	  String.raw` ___  `,
		String.raw`|__ \ `,
		String.raw`   ) |`,
		String.raw`  / / `,
		String.raw` / /_ `,
		String.raw`|____|`];
		case 3:
		case "3":
			return [
	  String.raw` ____  `,
		String.raw`|___ \ `,
		String.raw`  __) |`,
		String.raw` |__ < `,
		String.raw` ___) |`,
		String.raw`|____/ `];
		case 4:
		case "4":
			return [
	  String.raw` _  _   `,
		String.raw`| || |  `,
		String.raw`| || |_ `,
		String.raw`|__   _|`,
		String.raw`   | |  `,
		String.raw`   |_|  `];
		case 5: 
		case "5": 
			return [
	  String.raw` _____ `,
		String.raw`| ____|`,
		String.raw`| |__  `,
		String.raw`|___ \ `,
		String.raw` ___) |`,
		String.raw`|____/ `];
		case 6:
		case "6":
			return [
	  String.raw`   __  `,
		String.raw`  / /  `,
		String.raw` / /_  `,
		String.raw`| '_ \ `,
		String.raw`| (_) |`,
		String.raw` \___/ `,];
		case 7:
		case "7":
			return [
	  String.raw` ______ `,
		String.raw`|____  |`,
		String.raw`    / / `,
		String.raw`   / /  `,
		String.raw`  / /   `,
		String.raw` /_/    `];
		case 8:
		case "8":
			return [
	  String.raw`  ___  `,
		String.raw` / _ \ `,
		String.raw`| (_) |`,
		String.raw` > _ < `,
		String.raw`| (_) |`,
		String.raw` \___/ `];
		case "9":
			return [
	  String.raw`  ___  `,
		String.raw` / _ \ `,
		String.raw`| (_) |`,
		String.raw` \__, |`,
		String.raw`   / / `,
		String.raw`  /_/  `];
	}
}

function mergeStrings(str1, str2, overlap)
{
	let str1Array = str1.split('');
	let str2Array = str2.split('');
	overlap = (overlap > str1.length) ? str1.length : overlap;

	// Do not let spaces in str2 replace str1 chars
	while (str2Array[0] === " " && overlap > 0) {
		str2Array.shift();
		overlap -= 1;
	}

	for (let i = 0; i < overlap; i += 1) {
		str1Array.pop();
	}

	return str1Array.join('') + str2Array.join('');
}

const arrange = (str) => {
	let words = str.split(' ');

	for (let i = 0; i < words.length-1; i++)
		words = i%2 === 0 ? even(words, i) : odd(words, i);

	return changeCases(words);
}

const even = (words, i) => {
	if (i != 0 && (
		words[i].length === words[i-1].length && words[i].length < words[i-1].length
		) || words[i].length > words[i+1].length)
		words.splice(i+1, 0, words.splice(i, 1).toString());

	return words;
}

const odd = (words, i) => {
	if (words[i].length < words[i+1].length)
		words.splice(i+1, 0, words.splice(i, 1).toString());

	return words;
}

const changeCases = (words) => {
	let result = '';

	for (let i = 0; i < words.length; i++)
		result += i%2 === 0 ? `${words[i].toLowerCase()} ` : `${words[i].toUpperCase()} `;

	return result.trim();
}

arrange("who hit retaining The That a we taken"); // who RETAINING hit THAT a THE we TAKEN 3
arrange("on I came up were so grandmothers"); // i CAME on WERE up GRANDMOTHERS so 4
arrange("way the my wall them him"); // way THE my WALL him THEM 1
arrange("turn know great-aunts aunt look A to back"); // turn GREAT-AUNTS know AUNT a LOOK to BACK 2

import reverseString from "@sreetamdas/reverse-string";

const kebabCase = string => {
	const kebabed = string.split(" ").join("-");
	console.log({ kebabed });
	const reversed = reverseString(string);
	console.log({ reversed });

	return kebabed;
};

export default kebabCase;

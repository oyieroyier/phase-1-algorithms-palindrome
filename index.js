function isPalindrome(word) {
	// Write your algorithm here
	const arrayOfLetters = word.split("");
	const reverseLetters = arrayOfLetters.reverse();
	const reverseString = reverseLetters.join("");

	if (word == reverseString) {
		return true;
	} else {
		return false;
	}
}

/* 
  Add your pseudocode here

  Split the array of letter to single letter
  check if word is equal to its reversed version
  Join the reversed version to an array or a word
    if word is the same as its reversed version:
        return true
    if word is not the same as its reversed version
        return false

  Add written explanation of your solution here
/*
  first: Split the array of letter to single letter
  second: convert the received word into its reversed version
  third: Join the reversed version to an array or a word
  fourth: check if the received word and the reversed version are the same
  lastly: return true or false accordingly
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", isPalindrome("racecar"));

	console.log("");

	console.log("Expecting: false");
	console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

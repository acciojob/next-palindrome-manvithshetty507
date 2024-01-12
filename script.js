function nextPalindrome(num) {
  //your JS code here.
	let cur = ++num;
	while(true) {
		if(isPalindrome(cur)) return cur;
		else cur++;
	}
	function isPalindrome(num) {
		let s = num.toString()
		let rev = s.split('').reverse().join('')
		
		return s === rev
	}
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));


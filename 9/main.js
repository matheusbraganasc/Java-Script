function isPalindrome(sentence) {
    const cleanSentence = sentence.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanSentence === cleanSentence.split('').reverse().join('');
}


console.log(isPalindrome("Socorram-me, subi no ônibus em Marrocos"));  
console.log(isPalindrome("Hello, World!")); 
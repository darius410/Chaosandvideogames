function palindrome(str) {

    const regex = /[^a-z0-9]/g;
    const cleanStr = str.toLowerCase().replace(regex, "");
    console.log(cleanStr)
    const reversedStr = cleanStr.split("").reverse().join("");
    console.log(reversedStr)
    const isDrome = cleanStr === reversedStr;

    console.log(isDrome)
    console.log(reversedStr)


}
palindrome("pass,3ssap")
// const str = 'apple'
// let new_str = ''

// for (let i = 0; i < str.length; i++) {

//     let value = str[i]
//     let count = 0

//     for (let j = 0; j < new_str.length; j++) {
//         if (value === new_str[j]) {
//             count++
//         }
//     }
//     if (count < 1) {
//         new_str += value
//     }
// }

// for (let j = 0; j < new_str.length; j++) {

//     let new_value = new_str[j]
//     let new_count = 0

//     for (let j = 0; j < str.length; j++) {

//         if (new_value === str[j]) {
//             new_count++
//         }
//     }

//     console.log(`${new_value} --> ${new_count}`);

// }

// let current_Str = "love JavaScript programming"
// let first_Holder = ''
// let sec_Holder = '' 

// for (let i = 0; i < current_Str.length; i++) {

//     if (current_Str !== ' ') {
//         first_Holder += current_Str[i]
//     } else {
//         if (first_Holder.lastIndexOf() >= sec_Holder.lastIndexOf()){
//             sec_Holder = first_Holder

//         }
//         first_Holder = ""
//     }

// }

// console.log(sec_Holder);
// console.log(first_Holder);

// let current_Str = "I love JavaScript programming";
// let currentWord = ''; 
// let longestWord = ''; 

// for (let i = 0; i < current_Str.length; i++) {

//     if (current_Str[i] !== ' ') {
//         currentWord += current_Str[i];
//     } else {
//         if (currentWord.length > longestWord.length) {
//             longestWord = currentWord;
//         }
//         currentWord = "";
//     }
// }

// if (currentWord.length > longestWord.length) {
//     longestWord = currentWord;
// }

// console.log(longestWord);


// let currentSrt = 'I  Love  JavaScript'
// let holder = ''

// for (let i = 0; i < currentSrt.length; i++) {
//     if (currentSrt[i] !== ' ') {
    
//         holder += currentSrt[i]

//     }
// }

// console.log(counter);

// function countWords(str) {
//   let count = 0;
//   let isWord = false;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ' || str[i] === '\t' || str[i] === '\n') {
//       isWord = false;
//     } 
//     else if (isWord === false) {
//       isWord = true;
//       count++;
//     }
//   }

//   return count;
// }

// const input = "I  Love  JavaScript";
// console.log(`Input: "${input}"      Output: ${countWords(input)}`);
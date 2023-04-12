/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let doubleVals = []
    arr.forEach(function(val) {
        doubleVals.push(val * 2)
    })
    return doubleVals
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
   let evens = []
   arr.forEach(function(val) {
    val % 2 === 0 ? evens.push(val) : null
   })
    return evens
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let newArr = arr.map(function(word) {
        let first = word[0]
        let last = word[word.length - 1]
        return first + last
    })
    return newArr
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
// function addKeyAndValue(arr,key,value){
//     let newArr = arr.map(function(name, key){
//         console.log({...name, key : value})
//     })
// }
// addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')
function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
  }
  

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

//learning case: indexOf !== -1
//learning case: obj[] = 1 kind of creates that object with a number value, then ++ will increment
function vowelCount(str){
   let count = {};
   let vowels = "aeiou"
   let letters = str.split("")
   letters.forEach(function(letter) {
    let lower = letter.toLowerCase()
    if (vowels.indexOf(lower) !== -1) {
        if (count[lower]) {
            count[lower]++
        } else {
            count[lower] = 1
        }
    }
   })

   return count
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

//learning case: had to return the arr.map or return the declared variable
function doubleValuesWithMap(arr) {
    let doubled = arr.map(function(num) {
       return num * 2
    })
    return doubled
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    let multByIndex = arr.map(function(val, idx) {
        return val * idx
    })
    return multByIndex
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

//learning case: answer is return val[key] // val[key] is the value whereas key[val] returns just the key
function extractKey(arr, key){
    let extracted = arr.map(function(val) {
        return val[key]
    })
    return extracted
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    let full = arr.map(function(name) {
        return name.first + " " + name.last
    })
    return full
}



/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

//val key means the value of whatever the key/argument is. literally if the value of catowner is not undefined, return
function filterByValue(arr, key) {
   let filtered = arr.filter(function(val) {
    return val[key] !== undefined
   })
   return filtered
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

// function find(arr, searchValue) {
//     let foundNum = arr.filter(function(num) {
//        return num === searchValue ? searchValue : undefined
//     })
//     return foundNum
// }

function find(arr, searchValue) {
    let filtered = arr.filter(function(val) {
      return val === searchValue;
    })[0];
    return filtered
  }

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    let filteredVal = arr.filter(function(val) {
        return val[key] === searchValue
      })[0]
      return filteredVal
}
  
/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

//learning case: str has to be lowercased before filter method runs
//not finished.
function removeVowels(str) {
    debugger
    let lowercased = str.toLowerCase()
    let arr = lowercased.split("");
    let noVows = arr.filter(function(letters) {
        let vowels = "aeiou"
        if (vowels.indexOf(letters) === -1) {
            return letters
        }
    })
    noVows.join("")
    return noVows
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

//learning case: filter had to be first, and map second but i'm not sure why.
function doubleOddNumbers(arr) {
    return arr
        .filter(function(num) {
            return num % 2 === 1
        })
        .map(function(num) {
            return num * 2
        })
}

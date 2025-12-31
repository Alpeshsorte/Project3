// function first(arr,n){
//    let newarr=[]
//     if(n==undefined)
//     {
//         return arr[0]
//     }else{
        
//             if(n>arr.length){
                  
//                  for(let i=0;i<=arr.length-1;i++)
//                    {
//                     newarr.push(arr[i])
//                    }

//             }else{
//                  for(let i=0;i<=n-1;i++)
//                    {
//                     newarr.push(arr[i])
//                    }
//             }
//     }
//     return newarr
// }
// console.log(first([1,2,3,4,5],-12))




// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
// function is_array(input) {
//     return Array.isArray(input);
// }

// // Test Data
// console.log(is_array('w3resource'));  // false
// console.log(is_array([1, 2, 4, 0]));  // true

// // 2. Write a JavaScript function to clone an array.
// // Test Data :
// // console.log(array_Clone([1, 2, 4, 0]));
// // console.log(array_Clone([1, 2, [4, 0]]));
// // [1, 2, 4, 0]
// // [1, 2, [4, 0]]
// function array_Clone(arr) {
//     return arr.slice(0);
// }

// // Test Data
// console.log(array_Clone([1, 2, 4, 0]));     // [1, 2, 4, 0]
// console.log(array_Clone([1, 2, [4, 0]]));   // [1, 2, [4, 0]]


// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []
function get(arr, n) {
    let newarr = [];

    if (n === undefined) {
        // return last element
        return arr[arr.length - 1];
    } else {
        if (n > arr.length) {
            // if n greater than array length, return full array
            return arr;
        } else {
            // push last n elements
            for (let i = arr.length - n; i < arr.length; i++) {
                newarr.push(arr[i]);
            }
        }
    }
    return newarr;
}

// Test cases
console.log(get([7, 9, 0, -2]));        // -2
console.log(get([7, 9, 0, -2, 4], 3));  // [0, -2, 4]
console.log(get([7, 9, 0, -2], 6));     // [7, 9, 0, -2]


// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

function get(arr,n){
    let newarr=[]
    if(n==undefined){
        return arr[arr.length-1]
    }else{
        if(n>arr.length){
            for(let i=0;i<=arr.length-1;i++){
                newarr.push(arr[i])
            }
        }else{
            for(let i=arr.length-n;i<=arr.length-1;i++){
                newarr.push(arr[i])
            }
        }
    }
    return newarr
}
console.log(get([7, 9, 0, -2]))//-2
console.log(get([7, 9, 0, -2,4],3))//[9,0,-2]
console.log(get([7, 9, 0, -2],6))//[7, 9, 0, -2]


// function get(arr,n){
//     let newarr=[]
//     if(n==undefined){
//         return arr[arr.length-1]
//     }else{
//         if(n>arr.length){
//             for(let i=0;i<=arr.length-1;i++){
//                 newarr.push(arr[i])
//             }
//         }else{
//             for(let i=arr.length-1;i>0;i--){
//                 newarr.push(arr[i])
//             }
//         }
//     }
//     return newarr
// }
// console.log(get([7, 9, 0, -2]))//-2
// console.log(get([7, 9, 0, -2],3))//[9,0,-2]
// console.log(get([7, 9, 0, -2],6))//[7, 9, 0, -2]

// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
// let myColor = ["Red", "Green", "White", "Black"];
// let result = "";
// for (let i = 0; i < myColor.length; i++) {
//     result += myColor[i];
//     if (i < myColor.length - 1) result += ",";
// }
// console.log(result);  // "Red,G

// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
// let num = prompt("Enter a number:");
// let result = num[0];

// for (let i = 1; i < num.length; i++) {
//     if (num[i - 1] % 2 == 0 && num[i] % 2 == 0) {
//         result += "-" + num[i];
//     } else {
//         result += num[i];
//     }
// }

// console.log(result);
// 7. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
let arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);


// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
function mostFrequent(arr) {
    let obj = {};
    let maxCount = 0;
    let maxItem;

    for (let i = 0; i < arr.length; i++) {
        obj=arr[i]
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }

        if (obj[arr[i]] > maxCount) {
            maxCount = obj[arr[i]];
            maxItem = arr[i];
        }
    }

    console.log(`${maxItem} (${maxCount} times)`);
}

mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
function swapCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

// Test
console.log(swapCase('The Quick Brown Fox'));
// Output: tHE qUICK bROWN fOX


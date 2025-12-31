// let num=12349325209;
// let last_digit=num%10;//this condition take diret last digit
// let first_digit;
// while(num!=0){
//     first_digit=num%10
//     num=Math.floor(num/10)
// }
// console.log("first:-"+first_digit)
// console.log("last:-"+last_digit)

// 🔢 Basic Logic Questions

// Write a program to count the digits in a number.
// let num=78543455;
// let count=0;
// while(num!=0){
//     count++
//     num=Math.floor(num/10)
// }
// console.log(count)

// Write a program to find the sum of digits of a number.
// let num=2345678;
// let sum=0;
// while(num!=0){
//     let value=num%10
//     sum=sum+value
//     num=Math.floor(num/10)
// }
// console.log(sum)

// Write a program to reverse a number.
// let num=123456;
// let reverse=0;
// while(num!=0){
//     let value=num%10
//     reverse=reverse*10+value
//     num=Math.floor(num/10)
// }
// console.log(reverse)

// Write a program to check whether a number is palindrome or not.
// let num=12321456;
// let orignal=num;
// let reverse=0;
// while(num!=0){
//     let value=num%10
//     reverse=reverse*10+value
//     num=Math.floor(num/10)
// }if(orignal===reverse){
//     console.log("palindrome:-",reverse)
// }else{
//     console.log("not palindrome",reverse)
// }


// check the string is palindrome or not 
// let str="mam";
// let rev="";
// for(let i=str.length-1;i>=0;i--){
//     rev=rev+str[i]
// }if(str===rev){
//     console.log("palindrome:-" + rev)
// }else{
//     console.log("not palindrome:-" + rev)
// }

// let str="Hello";
// let rev="";
// let i=str.length-1;
// while(i>=0){
//     rev=rev+str[i]
//     i--;
// }if(str===rev){
//     console.log("palindrome:-" + rev)
// }else{
//     console.log("Not palindrome:-" + rev)
// }


// Write a program to find the factorial of a number.
// let n=5;
// let fact=1;
// while(n!=0){
//     fact=fact*n
//     n--;
// }
// console.log(fact)

// Write a program to check whether a number is prime or not.
// function check_prime(num){
//     if(num<=1) return false;
//     for(let i=2;i<=0;i++){
//         if(num%i==0){
//             return false
//         }
//     }
//     return true;
// }
// check_prime(11)
// check_prime(7)
// check_prime(10)

// Write a program to find the greatest of three numbers.
// let a=12, b=23, c=20;
// if(a>=b && b>=c){
//     console.log("a is greatest")
// }else if (b>=a && b>=c){
//     console.log("b is greatest")
// }else if (c>=a && c>=b){
//     console.log("c is greatest")
// }else{
//     console.log("enter valid number")
// }
// Write a program to check whether a number is even or odd.
// let num=13;
// if(num%2==0){
//   console.log("even")
// }else{
//   console.log("odd")
// }

// Write a program to check whether a number is armstrong or not.
// let num=152;
// let org=num;
// let sum=0;
// while(num>0){
//     let digit=num%10
//     sum=sum+(digit**3)
//     num=Math.floor(num/10)
// }if(org===sum){
//     console.log("armstrong number:-"+sum)
// }else{
//     console.log("not armstrong number:-"+sum)
// }

// Write a program to find the sum of first N natural numbers.
// let n=10;
// let sum=0;
// for(let i=1;i<=n;i++){
//   sum=sum+i
// }
// console.log(sum)

// 🧠 Slightly Logical Questions

// Write a program to print the Fibonacci series up to N terms.
// let n=20;
// let a=0, b=1
// console.log("fibonacci series")
// for(let i=1; i<=n;i++){
//   console.log(a)
//   let next=a+b
//   a=b;
//   b=next
// }


// Write a program to count how many even and odd digits are in a number.
// let num=1234567;
// let evencount=0;
// let oddcount=0;
// while(num!=0){
//     let value=num%10
//     if(value%2===0){
//         evencount++
//     }else{
//         oddcount++
//     }
//     num=Math.floor(num/10)
// }
// console.log("even count:-",evencount)
// console.log("odd count:-",oddcount)

// Write a program to check whether a number is perfect or not.

// Write a program to check whether a number is strong number or not.

// Write a program to find the largest digit in a given number.

// Write a program to find the smallest digit in a given number.

// Write a program to find the LCM and GCD of two numbers.

// Write a program to count how many times a digit appears in a number.

// Write a program to check whether a number is Harshad (Niven) number.

// Write a program to check whether a number is automorphic (last digits same as square).

// Would you like me to give you the JavaScript code for each one step-by-step (starting from easy to hard)?

// You said:
// or 2) write a program to find first and last digits in a number 
// ChatGPT said:

// Perfect 👍 You’ve got the right idea!
// Here are more logic-based JavaScript questions just like:

// Count digits in a number

// Find first and last digits in a number

// 🧩 Similar Logic Questions

// Write a program to find the sum of first and last digits of a number.
// let num=443165546;
// let last_digit=num%10
// let sum=0;
// let first_digit;
// while(num!=0){
//   let first_digit=num%10
//   num=Math.floor(num/10)
//   sum=first_digit+last_digit
// }
// console.log(sum)


// Write a program to swap the first and last digits of a number.
// let num=12345;
// let str_num=num.toString();
// let first_digit=str_num[0];
// let last_digit=str_num[str_num.length-1];
// let middle_part=str_num.slice(1,str_num.length-1);
// let swapped_num=last_digit + middle_part + first_digit;
// console.log(swapped_num)

// Write a program to find the product of digits of a number.
// let num=1234
// let product=1;
// while(num!=0){
//     last=num%10
//     product=product*last
//     num=Math.floor(num/10)
// }
// console.log(product)

// Write a program to reverse a given number.

// Write a program to check if the number is a palindrome.

// Write a program to check if the number is an Armstrong number.

// Write a program to find the largest digit in a number.
// let num=14626868
// let max=0;
// while(num>0){
//     let last=num%10
//     if(last>max){
//         max=last
//     }
//     num=Math.floor(num/10)
// }
// console.log(max)

// Write a program to find the smallest digit in a number.
// let num=3598016296;
// let min=9;
// while(num>0){
//     let last=num%10
//     if(last<min){
//         min=last
//     }
//     num=Math.floor(num/10)
// }
// console.log(min)

// Write a program to count the number of even and odd digits in a number.

// Write a program to check if the number is divisible by the sum of its digits (Harshad number).

// Write a program to calculate the sum of all prime digits in a number.
// Write a program to calculate the sum of all prime digits in a number.
// let num=321885214;
// let sum=0;
// while(num>0){
//     let last=num%10
//     if(last==2 || last==3 || last==5 || last==7){
//         sum=sum+last;
//     }
//     num=Math.floor(num/10)
// }
// console.log(sum)

// Write a program to find the difference between the sum of even and odd digits in a number.

// Write a program to check whether a number is a perfect square.

// Write a program to check whether a number is a perfect number.

// Write a program to print all factors of a number.

// Write a program to find the factorial of a number.

// Write a program to count how many times a particular digit appears in a number.

// Write a program to find the average of digits of a number.

// Would you like me to show you the JavaScript code for question (2) — “find first and last digits in a number”?







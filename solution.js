/* 프로그래머스 - 코딩테스트 - 입문문제 */

/* 1. 두 수의 합 */
/*
function solution(num1, num2) {
    return num1+num2;
}
console.log(solution(2,3));
console.log(solution(100,2));
*/

/* 2. 두 수의 차 */
/*
function solution(num1, num2) {
    return num1-num2;
}
console.log(solution(2,3));
console.log(solution(100,2));
*/

/* 3. 두 수의 곱 */
/*
function solution(num1, num2) {
    return num1*num2;
}
console.log(solution(3,4));
console.log(solution(27,19));
*/

/* 4. 몫 구하기 */
/*
function solution(num1, num2) {
    return Math.floor(num1/num2);
}
console.log(solution(10,5));
console.log(solution(7,2));
*/

/* 5. 두 수의 나눗셈 */
/*
function solution(num1, num2) {
    return Math.floor((num1/num2) * 1000);
}
console.log(solution(3,2));
console.log(solution(7,3));
console.log(solution(1,16));
*/

/* 6. 숫자 비교하기 */
/*
function solution(num1, num2) {
    return num1 == num2 ? 1 : -1 ; 
}
console.log(solution(2,3));
console.log(solution(11,11));
console.log(solution(7,99));
*/

/* 7. 분수의 덧셈 */

/* 8. 배열 두 배 만들기 */
/*
function solution(numbers) {
    for(var i=0; i<numbers.length; i++){
         numbers[i] = numbers[i] * 2;
    }
   return numbers;
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 100, -99, 1, 2, 3]));
*/

/* 9. 나머지 구하기 */
/*
function solution(num1, num2) {
    return num1%num2;
}
console.log(solution(3,2));
console.log(solution(10,5));
*/

/* 10. 나머지 구하기 */
/*
function solution(num1, num2) {
    return num1%num2;
}
console.log(solution(3,2));
console.log(solution(10,5));
*/

/* 11. 중앙값 구하기 */
/*
function solution(array) {
    array.sort((a, b) => a - b);
    return array[Math.floor(array.length/2)];
}
console.log(solution([1, 2, 7, 10, 11]));
console.log(solution([9, -1, 0]));
*/

/* 12. 최빈값 구하기 */

/* 13. 짝수는 싫어요 */
/*
function solution(n) {
    var answer = [];
    
    for(var i=1;  i <= n; i+=2){
        answer.push(i);
    }
    return answer;
}
console.log(solution(10));
console.log(solution(15));
*/

/* 14. 피자 나눠 먹기(1) */
/*
function solution(n) {
    return Math.ceil(n/7);
}
console.log(solution(7));
console.log(solution(1));
console.log(solution(15));
*/


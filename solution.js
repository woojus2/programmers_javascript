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

/* 7. 분수의 덧셈 */ /********************************/

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

/* 10. 중앙값 구하기 */
/*
function solution(array) {
    array.sort((a, b) => a - b);
    return array[Math.floor(array.length/2)];
}
console.log(solution([1, 2, 7, 10, 11]));
console.log(solution([9, -1, 0]));
*/

/* 11. 최빈값 구하기 */ /********************************/

/* 12. 짝수는 싫어요 */
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

/* 13. 피자 나눠 먹기(1) */
/*
function solution(n) {
    return Math.ceil(n/7);
}
console.log(solution(7));
console.log(solution(1));
console.log(solution(15));
*/

/* 14. 피자 나눠 먹기(2) */
/*
function solution(n) {
    var cnt = 1;
    while(true){
        if((cnt*6)%n==0){
            return cnt;
        }
        cnt++;
    }
}
console.log(solution(6)); 
console.log(solution(10)); 
console.log(solution(4));
*/

/* 15. 피자 나눠 먹기(3) */
/*
function solution(slice, n) {
    return Math.ceil(n/slice);
}
    
console.log(solution(7,10)); 
console.log(solution(4,12));
*/

/* 16. 배열의 평균값 */
/*
function solution(numbers) {
    var sum = 0;
    for(var i = 0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum/numbers.length;
}
    
console.log(solution([1,2,3,4,5,6,7,8,9,10])); 
console.log(solution([89,90,91,92,93,94,95,96,97,98,99]));
*/

/* 17. 옷가게 할인 받기 */
/*
function solution(price) {
    if(price >= 10 && price <= 1000000){
        // 10만원이상 구매 => 5%
        // 30만원이상 구매 => 10%
        // 50만원이상 구매 => 20%
        if(price >= 100000 && price <= 299999){

            return Math.trunc(price-(price*0.05));

        }else if(price >= 300000 && price <= 499999){

            return Math.trunc(price-(price*0.1));

        }else if(price >= 500000){

            return Math.trunc(price-(price*0.2));
        }else{
             return price;
        }
    }
}
    
console.log(solution(150000)); 
console.log(solution(580000));
*/

/* 18. 아이스 아메리카노 */
/*
function solution(money) {
    var answer = [];
    answer.push(Math.floor(money/5500));
    answer.push(Math.floor(money%5500));
    return answer;
}

console.log(solution(5500)); 
console.log(solution(15000));
*/

/* 19. 나이 출력 */
/*
function solution(age) {
    return 2022-age+1;
}

console.log(solution(40)); 
console.log(solution(23));
*/

/* 20. 배열 뒤집기 */
/*
function solution(num_list) {
    return num_list.reverse();
}

console.log(solution([1,2,3,4,5])); 
console.log(solution([1,1,1,1,1,2]));
console.log(solution([1,0,1,1,1,3,5]));
*/

/* 21. 문자열 뒤집기 */
/*
function solution(my_string) {
    return my_string.split('').reverse().join('');
}

console.log(solution("jaron")); 
console.log(solution("bread"));
*/

/* 22. 직각삼각형 출력하기 */ /********************************/


/* 23. 짝수 홀수 개수 */
/*
function solution(num_list) {
    var answer = [0,0];
    for(var i=0; i<num_list.length; i++){
        if(num_list[i] % 2 == 0){
            answer[0]++;
        }else{
            answer[1]++;
        }
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5])); 
console.log(solution([1, 3, 5, 7]));
*/

/* 24. 문자 반복 출력하기 */
/*
function solution(my_string, n) {
    var answer = '';
    for(var i=0; i<my_string.length; i++){
        for(var j=0; j<n; j++){
           answer+=my_string[i];
        }
    }
    return answer;
}

console.log(solution("hello", 3));
*/

/* 25. 특정 문자 제거하기 */
/*
function solution(my_string, letter) {
    var answer = '';
    for(var i=0; i<my_string.length; i++){
        if(!(my_string[i].includes(letter))){
            answer+= my_string[i];
        }
    }
    return answer;
}

console.log(solution("abcdef", "f")); 
console.log(solution("BCBdbe", "B"));
*/

/* 26. 각도기 */
/*
function solution(angle) {
    var answer = 0;
    return answer = (angle>0 && angle<90)? 1:(angle == 90)?2:(angle>90 && angle<180)?3:(angle == 180)?4:undefined;
}

console.log(solution(70, 1)); 
console.log(solution(91, 3));
console.log(solution(180, 4));
*/

/* 27. 양꼬치 */
/*
function solution(n, k) {
    var yang = 12000;
    var ken = 2000;
    return (yang*n) + (ken*k)-(Math.floor(n/10)*ken);
}

console.log(solution(10, 3));
console.log(solution(64, 6));
*/

/* 28. 짝수의 합 */
/*
function solution(n) {
    var sum = 0; 
    for(var i=0; i<=n; i=i+2){
        sum += i
    }
    return sum;
}

console.log(solution(10, 30));
console.log(solution(4, 6));
*/

/* 29. 배열 자르기 */
/*
function solution(numbers, num1, num2) {
    var answer =  [];
    for(var j=num1; j<=num2; j++){
        
        answer.push(numbers[j]);
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5], 1, 3));
console.log(solution([1, 3, 5], 1, 2));
*/

/* 30. 외계행성의 나이 */
/*
function solution(age) {
    var answer = '';
    age = String(age);
    let str = [];	
 
    for (let i = 97; i <= 122; i++) {
        str += String.fromCharCode(i);
    }
    for(let j = 0; j< age.length; j++){
        answer+=str[age[j]];
    }
    return answer;
}

console.log(solution(23));
console.log(solution(51));
console.log(solution(100));
*/

//////////////////////////////////////////////////

/* 31. 진료순서 정하기 */
/*
function solution(age) {
    var answer = '';
    age = String(age);
    let str = [];	
 
    for (let i = 97; i <= 122; i++) {
        str += String.fromCharCode(i);
    }
    for(let j = 0; j< age.length; j++){
        answer+=str[age[j]];
    }
    return answer;
}

console.log(solution(23));
console.log(solution(51));
console.log(solution(100));
*/

/* 32. 순서쌍의 개수 */
/*
function solution(n) {
    var answer = 0;
    for(var i=0; i<=n; i++){
        if(n % i == 0){
            answer++;
        }
    }
    
    return answer;
}

console.log(solution(20));
console.log(solution(100));
*/

/* 33. 개미 군단 */
/*
function solution(hp) {
    let jang = 5;
    let byeong = 3;
    let ill = 1;
    let answer = 0;
    let jang_cnt = 0;
    let byeong_cnt = 0;
    let ill_cnt = 0;
    
    jang_cnt = Math.floor(hp/jang); // 장군개미 수
    byeong_cnt = Math.floor((hp-jang_cnt*jang)/byeong); // 병정개미 수
    ill_cnt = Math.floor((hp-(jang_cnt*jang + byeong_cnt*byeong))/ill); // 일개미 수
    answer = jang_cnt+byeong_cnt+ill_cnt;
  
    return answer;
}

console.log(solution(23));
console.log(solution(24));
console.log(solution(999));
*/

/* 34. 모스 부포 (1) */ /********************************/
/* 35. 가위 바위 보 */ /********************************/
/* 36. 구슬을 나누는 경우의 수 */ /********************************/
/* 37. 점의 위치 구하기 */ /********************************/
/* 38. 2차원으로 만들기 */ /********************************/
/* 39. 공 던지기 */ /********************************/
/* 40. 배열 회전시키기 */ /********************************/

/* 41. 주사위의 개수 */
/*
function solution(box, n) {
    return (Math.floor(box[0]/n))*(Math.floor(box[1]/n))*(Math.floor(box[2]/n));
}

console.log(solution([1,1,1],1));
console.log(solution([10,8,6],3));
*/

/* 42. 합성 수 찾기 */ /********************************/

/* 43. 최댓값 만들기(1) */
/*
function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[numbers.length-1]*numbers[numbers.length-2];
}

console.log(solution([1,2,3,4,5]));
console.log(solution([0,31,24,10,1,9]));
*/

/* 44. 팩토리얼 */ /********************************/
/* 45. 모음 제거 */ /********************************/
/* 46. 문자열 정렬하기 (1)*/ /********************************/

/* 47. 숨어있는 숫자의 덧셈 (1) */
/*
function solution(my_string) {
    var answer = [];
    answer = my_string;
    var sum = 0;
    for(var i=0; i<answer.length; i++){
        if(!(isNaN(answer[i]))){
            sum += Number(answer[i]);
        }
    }
    return sum;
}

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123"));
*/

/* 48. 소인수분해 */ /********************************/
/* 49. 컨트롤 제트 */ /********************************/

/* 50. 배열의 원소의 길이 */
/*
function solution(strlist) {
    var answer = [];
    for(var i=0; i<strlist.length; i++){
        answer.push(strlist[i].length);
    }
    return answer;
}

console.log(solution(["We", "are", "the", "world!"]));
console.log(solution(["I", "Love", "Programmers."]));
*/


/*
출처: 프로그래머스 코딩 테스트 입문, https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc
*/
/* 프로그래머스 - 코딩테스트 - 입문문제 */

/* ************* 2주차 ************* */

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

/* ************* 3주차 ************* */
 
/* 31. 진료순서 정하기 - (120835) */
/*
function solution(emergency) {
    var real_arr = emergency.slice();; 
    emergency.sort((a, b) => b - a); 
    var obj = {};
    var result = [];
    emergency.forEach((element, index) => {obj[index+1] = element;});
    for (var i = 0; i<real_arr.length; i++){
        for(var [key,value] of Object.entries(obj)){
                if(real_arr[i]==value){
                    result.push(parseInt(key));
                }
            }
        }
   return result;
}

console.log(solution([3, 76, 24]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
console.log(solution([30, 10, 23, 6, 100]));
*/

/* 32. 순서쌍의 개수 - (120836) */
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

/* 33. 개미 군단 - (120837) */
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

/* 34. 모스 부포 (1) - (120838) */
/*
function solution(letter) {
    var answer = letter.split(' ');
    var morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    var result = '';
    for(var i = 0; i<answer.length; i++){
        for(var [key,value] of Object.entries(morse)){
             if(answer[i] == key){
                result+=value;   
            }
        }
    }
    return result;
}

console.log(solution(".... . .-.. .-.. ---"));
console.log(solution(".--. -.-- - .... --- -."));

참고한 블로그 : https://juyami.tistory.com/89
*/

/* 35. 가위 바위 보 - (120839) */
/*
function solution(rsp) {
    var answer = rsp.split('');
    var result = '';
    var rock_paper_scissors = {'0':'5','2':'0','5':'2'};
    for(var i=0; i<answer.length; i++){
        for(var [key,value] of Object.entries(rock_paper_scissors)){
            if(answer[i] == key){
                result += value;
            }
        }
    }
    return result;
}

console.log(solution("2"));
console.log(solution("205"));
*/

/* 36. 구슬을 나누는 경우의 수 - (120840) */
/*
function solution(balls, share) {
    // balls = n
    // share = m
    
    // 분자 n!
    var n = 1; 
    for(var i=1; i<=balls; i++){
        n *= i;
    }
    
    // 분모 (n-m)! * m!
    var m1 = 1; // (n-m)!
    var m2 = 1; // m!
    for(var i=1; i<=(balls-share); i++){
        m1*= i;
    }
    for(var i=1; i<=share; i++){
        m2*= i;
    }
    var m = m1 * m2;
   
    return Math.round(n/m);
}

console.log(solution(3,2));
console.log(solution(5,3));
*/

/* 37. 점의 위치 구하기 - (120841) */
/*
function solution(dot) {
    if(Math.sign(dot[0]) == 1 && Math.sign(dot[1]) == 1){
        return 1;
    }else if(Math.sign(dot[0]) == 1 && Math.sign(dot[1]) == -1){
        return 4;
    }else if(Math.sign(dot[0]) == -1 && Math.sign(dot[1]) == 1){
        return 2;
    }else{
        return 3;
    }
}

console.log(solution([2, 4]));
console.log(solution([-7, 9]));
*/

/* 38. 2차원으로 만들기 - (120842) */ /********************************/

/* 39. 공 던지기 - (120843) */
/*
function solution(numbers, k) {
    var answer = [];
    for (var i = 0; i<=1000; i++){
        answer.splice(i,numbers.length-1,numbers);
        var new_arr1 = answer.flat(2);
        var new_arr2 = [];
       
        for (var j = 0; j <= new_arr1.length; j++){
            if(j%2==0){
                new_arr2.push(new_arr1[j]);
            }
        }
    }
   return new_arr2[k-1];
}

console.log(solution([1, 2, 3, 4],2));
console.log(solution([1, 2, 3, 4, 5, 6],5));
console.log(solution([1, 2, 3],3));
*/

/* 40. 배열 회전시키기 - (120844) */
/*
function solution(numbers, direction) {
    var answer = [];
    if(direction == 'right'){ // 오른쪽 이동
        for(var i=0; i<numbers.length; i++){
            if(i == numbers.length-1){
                // 마지막 value 라면 첫번째[0] 로 이동
                answer[numbers.length-numbers.length] = numbers[numbers.length-1];
            }else{
                // 마지막 value가 아니라면 현재 자리의 index +1 이동 (0아님)
               answer[i+1] = numbers[i];
            }
        }
    }else{ // 왼쪽 이동
        for(var i=0; i<numbers.length; i++){
            // 첫번째 value 라면 마지막[배열.length-1]으로 이동
            if(i == 0){
                answer[numbers.length-1] = numbers[0];
            }else{
            // 첫번째 value가 아니라면 현재 자리의 index -1 이동 (0아님)
               answer[i-1] = numbers[i];
            }
        }
    }
    return answer;
}

console.log(solution([1, 2, 3], "right"));
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
*/

/* 41. 주사위의 개수 - (120845) */
/*
function solution(box, n) {
    return (Math.floor(box[0]/n))*(Math.floor(box[1]/n))*(Math.floor(box[2]/n));
}

console.log(solution([1,1,1],1));
console.log(solution([10,8,6],3));
*/

/* 42. 합성 수 찾기 - (120846) */ /********************************/

/* 43. 최댓값 만들기(1) - (120847) */
/*
function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[numbers.length-1]*numbers[numbers.length-2];
}

console.log(solution([1,2,3,4,5]));
console.log(solution([0,31,24,10,1,9]));
*/

/* 44. 팩토리얼 - (120848) */
/*
function solution(n) {
    var i = 1;
    var p = 1;
    while(true){
        p = p*i;
        if(n==p){
            return i;
        }
        if(n<p){
            return i-1;
        }
        i++;
    }
}

console.log(solution(3628800));
console.log(solution(7));
*/

/* 45. 모음 제거 - (120849) */
/*
function solution(my_string) {
    var answer = '';
    for(var i=0; i<my_string.length; i++){
        if(!(my_string[i]=='a'||my_string[i]=='e'||my_string[i]=='i'||my_string[i]=='o'||my_string[i]=='u')){
            answer+=my_string[i];
        }
    }
    return answer;
}

console.log(solution("bus"));
console.log(solution("nice to meet you"));
*/

/* 46. 문자열 정렬하기 (1) - (120850) */
/*
function solution(my_string) {
    var answer = [];
    var iamnum = /\d/;
    for(var i=0; i<my_string.length; i++){
        if(iamnum.test(my_string[i])){
            answer.push(parseInt(my_string[i]));
        }
    }
    return answer.sort((a, b) => a - b);
}

console.log(solution("hi12392"));
console.log(solution("p2o4i8gj2"));
console.log(solution("abcde0"));
*/

/* 47. 숨어있는 숫자의 덧셈 (1) - (120851) */
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

/* 48. 소인수분해 - (120852) */ /********************************/

/* 49. 컨트롤 제트 - (120853) */
/*
function solution(s) {
    var answer = s.split(' ');
    var result = 0;
    for(var i=0; i<answer.length; i++){
        if(answer[i] == 'Z'){
            result += (-answer[i-1]);
        }else{
            result += parseInt(answer[i]);
        }
    }
    return result;
}

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));
console.log(solution("10 Z 20 Z"));
console.log(solution("-1 -2 -3 Z"));
*/

/* 50. 배열의 원소의 길이 - (120854) */
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

/* ************* 4주차 ************* */

/* 51. 중복된 문제 제거 - (120888) */
/*
function solution(my_string) {
    var answer = my_string.split('');
    const set = new Set(answer);
    const uniqueArr = [...set];
    return uniqueArr.join('');
}

console.log(solution("people"));
console.log(solution("We are the world"));
*/

/* 52. 삼각형의 완성조건(1) - (120889) */
/*
function solution(sides) {
    sides = sides.sort((a, b) => a - b);
    var answer = 0;
    var maxValue = 0;
     for (var i=0; i<sides.length; i++){
        if(2!=i){
            answer+=sides[i];
            maxValue = sides[2];
        }
    }
    return answer>maxValue? 1 : 2 ;
}

console.log(solution([1, 2, 3]));
console.log(solution([3, 6, 2]));
console.log(solution([199, 72, 222]));
*/

/* 53. 가까운 수 - (120890) */ /********************************/

/* 54. 369게임 - (120891) */
/*
function solution(order) {
    var answer = 0;
    order = String(order);
    for(var i=0; i<order.length; i++){
        
       if(order[i]==3 || order[i]==6 || order[i]==9){
            answer++;
        }
    }
    return answer;
}

console.log(solution(3));
console.log(solution(29423));
*/

/* 55. 암호 해독 - (120892) */
/*
function solution(cipher, code) {
    var answer,result = [];
    answer = cipher;
    for(var i = code-1; i<answer.length; i=i+code){
       result.push(answer[i]);
    }
    return result.join('');
}

console.log(solution("dfjardstddetckdaccccdegk", 4));
console.log(solution("pfqallllabwaoclk", 2));
*/

/* 56. 대문자와 소문자 - (120893) */
/*
function solution(my_string) {
    var answer = [my_string];
    for(var i=0; i<my_string.length; i++){
        if(my_string[i]==my_string[i].toLowerCase()){
            answer[i] = my_string[i].toUpperCase();
        }else{
            answer[i] = my_string[i].toLowerCase();
        }
    }
    return answer.join("");
}

console.log(solution("cccCCC"));
console.log(solution("abCdEfghIJ"));
*/

/* 57. 영어가 싫어요 - (120894) */
/*
function solution(numbers) {
    var answer = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
    for(var i=0; i<answer.length; i++){
       numbers = numbers.replaceAll(answer[i],i);
    }
    return Number(numbers);
}

console.log(solution("onetwothreefourfivesixseveneightnine"));
console.log(solution("onefourzerosixseven"));
*/

/* 58. 인덱스 바꾸기 - (120895) */
/*
function solution(my_string, num1, num2) {
    var answer = my_string.split('');
    var temp = answer[num1];
    for(var i=0; i<answer.length; i++){
        if(i == num1){
            answer[num1]=answer[num2];
        }else if(i == num2){
            answer[num2]=temp;
        }
    }
    return answer.join('');
}

console.log(solution("hello", 1, 2));
console.log(solution("I love you", 3, 6));
*/

/* 59. 한 번만 등장한 문자 - (120896) */
/*
function solution(s) {
    
    var answer = s.split('');
    var result = [];
    
    for(var i=0; i<answer.length; i++){
        if(s.lastIndexOf(answer[i]) == s.indexOf(answer[i])){
            result+=answer[i];
        }
    }
    return result.split('').sort().join('');
}

console.log(solution("abcabcadc"));
console.log(solution("abdc"));
console.log(solution("hello"));
*/

/* 60. 약수 구하기 - (120897) */
/*
function solution(n) {
    
    var answer = [];
    for(var i=0; i<=n; i++){
        if(n%i == 0){
            answer.push(i);
        }
    }
    return answer;
}

console.log(solution(24));
console.log(solution(29));
*/

/* ************* 5주차 ************* */

/* 61. 편지 - (120898) */
/*
function solution(message) {
    return message.length*2;
}

console.log(solution("happy birthday!"));
console.log(solution("I love you~"));
*/

/* 62. 가장 큰 수 찾기 - (120899) */
/*
function solution(array) {
    var num = 0;
    for(var i = 0; i < array.length; i++){
        if (Math.max(...array) == array[i]){
            num = i;
        }
    }
    var answer = [];
    answer.push(Math.max(...array));
    answer.push(num);
    return answer;
}

console.log(solution([1, 8, 3]));
console.log(solution([9, 10, 11, 8]));
*/

/* 63. 문자열 계산하기 - (120902) */
/*
function solution(my_string) {
    return eval(my_string);
}

console.log(solution("3 + 4"));
*/

/* 64. 배열의 유사도 - (120903) */
/*
function solution(s1, s2) {
    var answer = 0;
    for(var i=0; i<s1.length; i++){
        for(var j=0; j<s2.length; j++){
            if(s1[i]==s2[j]){
                answer++;
            }
        }
    }
    return answer;
}

console.log(solution(["a", "b", "c"],["com", "b", "d", "p", "c"]));
console.log(solution(["n", "omg"],["m", "dot"]));
*/

/* 65. 숫자 찾기 - (120904) */
/*
function solution(num, k) {
    var answer = 0;
    num = String(num);
    answer = num.indexOf(k)+1 || -1;
    return answer;
}

console.log(solution(29183,1));
console.log(solution(232443,4));
console.log(solution(123456,7));
*/

/* 66. n의 배수 고르기 - (120905) */
/*
function solution(n, numlist) {
    var answer = [];
    for(var i=0; i<numlist.length; i++){
        if(numlist[i]%n == 0){
            answer.push(numlist[i]);
        }
    }
    return answer;
}

console.log(solution(3,	[4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log(solution(5, [1, 9, 3, 10, 13, 5]));
console.log(solution(12, [2, 100, 120, 600, 12, 12]));
*/

/* 67. 자릿수 더하기 - (120906) */
/*
function solution(n) {
    n = String(n);
    var answer = 0;
    for(var i=0; i<n.length; i++){
       answer += Number(n[i]);
    }
    return answer;
}

console.log(solution(1234));
console.log(solution(930211));
*/

/* 68. OX퀴즈 - (120907) */ /********************************/

/* ************* 6주차 ************* */

/* 69. 문자열안에 문자열 - (120908) */
/*
function solution(str1, str2) {
    if(str1.includes(str2)){
       return true+0;
    }else{
        return true+1;
    }
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));
console.log(solution("ppprrrogrammers", "pppp"));
console.log(solution("AbcAbcA", "AAA"));
*/

/* 70. 제곱수 판별하기 - (120897) */
/*
function solution(n) {
    var answer = 1;
    if(Number.isInteger(Math.sqrt(n))){
        return answer;
    }else{
        return answer+1;
    }
}

console.log(solution(144));
console.log(solution(976));
*/

/* 71. 세균 증식 - (120910) */
/*
function solution(n, t) {
    var result = 1;
    for(var i = 1; i<=t; i++){
        result *= 2;
    }
    return result*n;
}

console.log(solution(2,10));
console.log(solution(7,15));
*/

/* 72. 문자열 정렬하기(2) - (120911) */
/*
function solution(my_string) {
    var answer = my_string.toLowerCase();
    var result = answer.split('');
    return result.sort().join('');
}

console.log(solution("Bcad"));
console.log(solution("heLLo"));
console.log(solution("Python"));
*/

/* 73. 7의 개수 - (120912) */
/*
function solution(array) {
    var result = '';
    var answer = [];
    var cnt = 0;
    for(var i=0; i<array.length; i++){
        result+=array[i];
        answer = result.split('');
    }
   for(var i=0; i<answer.length; i++){
       
       if(answer[i] === '7'){
           cnt++;
       }
    }
    return cnt;
}

console.log(solution([7, 77, 17]));
console.log(solution([10, 29]));
*/

/* 74. 잘라서 배열로 저장하기 - (120913) */
/*
function solution(my_str, n) {
    var answer = '';
    for(var i=0; i<my_str.length; i++){
        answer += my_str[i];
        if((i+1)%n==0){
            answer += ' ';
        }
    }
 return answer.trim().split(' ');
}

console.log(solution("abc1Addfggg4556b", 6));
console.log(solution("abcdef123", 3));
*/

/* 75. 중복된 숫자 개수 - (120583) */
/*
function solution(array, n) {
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == n){
            count++;
        }
    }
    return count;
}

console.log(solution([1, 1, 2, 3, 4, 5]));
console.log(solution([0, 2, 3, 4]));
*/

/* 76. 머쓱이보다 키 큰 사람 - (120585) */
/*
function solution(array, height) {
    var cnt=0;
    for(var i=0; i<array.length; i++){
        if(height<array[i]){cnt++;}
    }
    return cnt;
}

console.log(solution([149, 180, 192, 170],167));
console.log(solution([180, 120, 140],190));
*/

/* 직사각형 넓이 구하기 - (120860) */
/*
function solution(dots) {
    var answer1 = 0;
    var answer2 = 0;
    var resultx = [];
    var resulty = [];
    for(var i=0; i<dots.length; i++){
        for(var j=0; j<dots[i].length; j++){
            if(dots[0][1] == dots[i][1]){
                resultx.push(dots[i]);
                var numSet = new Set(resultx);
                resultx = [...numSet];
            }
            if(dots[0][0] == dots[i][0]){
                resulty.push(dots[i]);
                var numSet = new Set(resulty);
                resulty = [...numSet];
            }
        }
    }
    for(var k=Math.min(resultx[0][0],resultx[1][0]); 
        k<Math.max(resultx[0][0],resultx[1][0]); k++){
        answer1++;
    }
    for(var k=Math.min(resulty[0][1],resulty[1][1]); 
        k<Math.max(resulty[0][1],resulty[1][1]); k++){
        answer2++;
    }
    return answer1*answer2;
}

console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]]));
console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]]));
*/

/* 캐릭터의 좌표 - (120861) */
/*
function solution(keyinput, board) {
    var answer = [0,0];
    // 오른쪽 이동 가능 범위
    var moveable_right = Math.floor(board[0]/2);
    // 왼쪽 이동 가능 범위
    var moveable_left = -Math.floor(board[0]/2);
    // 위쪽 이동 가능 범위
    var moveable_up = Math.floor(board[1]/2);  
    // 위쪽 이동 가능 범위
    var moveable_down = -Math.floor(board[1]/2);  
    
    for(var i = 0; i < keyinput.length; i++){
        if(keyinput[i]=="left"){
            answer[0]--;
            if(answer[0]<moveable_left){
                answer[0]=moveable_left;
            }
        }else if(keyinput[i]=="right"){
            answer[0]++;
            if(answer[0]>moveable_right){
                answer[0]=moveable_right;
            }
        }else if(keyinput[i]=="up"){
            answer[1]++;
            if(answer[1]>moveable_up){
                answer[1]=moveable_up;
            }
        }else{
            answer[1]--;
            if(answer[1]<moveable_down){
                answer[1]=moveable_down;
            }
        }
    }
    return answer;
}
console.log(solution(["left", "right", "up", "right", "right"],[11, 11]));
console.log(solution(["down", "down", "down", "down", "down"],[7, 9]));
*/

/* 쵀댓값 만들기(2) - (120862) */
/*
function solution(numbers) {
    var answer = [];
    for(var i=1; i<=numbers.length; i++){
        for(var j=i-1;j<numbers.length-1; j++){
            answer.push(numbers[i-1]*numbers[j+1]);
        }
    }
    return Math.max(...answer);
}

console.log(solution([1, 2, -3, 4, -5]));
console.log(solution([0, -31, 24, 10, 1, 9]));
console.log(solution([10, 20, 30, 5, 5, 20, 5]));
*/

/* 다항식 더하기 */ /********************************/

/* ************* 8주차 ************* */

/* 숨어있는 숫자의 덧셈! */ /********************************/
/* 안전지대 */ /********************************/
/* 삼각형의 완성조건(2) */ /********************************/
/* 외계어 사전 */ /********************************/


/*
출처: 프로그래머스 코딩 테스트 입문, https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc
*/
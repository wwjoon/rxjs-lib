const { range } = require("rxjs");
const { filter, take, map, toArray } = require("rxjs/operators");

range(1, 20)
  .pipe(
    filter((n) => n % 2 === 0), // 짝수만 필터링
    take(5), // 첫 5개만 출력
    map((n) => Math.pow(n, 2)), // 각각의 수를 제곱 처리
    toArray(), // 통과하는 값들을 배열로 모아 내보냄
    map((arr) => arr.join(","))
  )
  .subscribe(console.log);

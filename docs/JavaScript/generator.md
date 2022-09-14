# 제너레이터 (Generator)

Generator.prototype.next()

yield 표현식을 통해 yield된 값을 반환합니다.

Generator.prototype.return()

주어진 값을 반환하고 제너레이터를 종료합니다.

```js
//제너레이터는 funtion앞에 *을 붙이면 됨 
function* multipleGenerator(){
    for(let i=0; i<10; i++){
        console.log(i)
        yield i**2
    }
}
// 다음 사용하는 사람이 기다렸다가 next를 호출해야지 yiled 가 실행됨
const multiple = multipleGenerator();
let next = multiple.next()
console.log(next);

//multiple.return() 종료됨

next = multiple.next()
console.log(next);
```
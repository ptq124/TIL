# 프로퍼티

프로퍼티란 속성이란 뜻으로 자바스크립트에서 객체 내부의 속성을 의미함

객체는 프로퍼티로 구성됨

프로퍼티는 key:value 형식임

오브젝트의 key , value, (key, value)를 아는 방법

```js
const person = { name: "foo", age: 1 }

//객체 key출력
console.log(Object.keys(person))
//key,value, 모두 출력
console.log(Object.entries(person))
//value값 출력
console.log(Object.values(person))

output: ["name", "age"][(["name", "foo"], ["age", 1])][("foo", 1)]
```

key가 있는지 검사

```js
console.log("name" in person)
console.log(person.hasOwnProperty("name"))
output:
true
true
{
```

오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨

```js
const des = Object.getOwnPropertyDescriptors(person)
console.log(des)

output:
  name: {
    value: 'foo',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 1, writable: true, enumerable: true, configurable: true }
}
```

writable: true, 수정가능한지

enumerable: true, 열거가능한지

configurable: true 속성들을 수정할 수 있는지

```js
const desc = Object.getOwnPropertyDescriptor(person, "name")
console.log(desc) //디스 크립터라고 한다.
output:
{ value: 'foo', writable: true, enumerable: true, configurable: true }
//프로퍼티를 수정이 가능하다
Object.defineProperty(person, "name", {
  value: "bar",
  writable: false,
  enumerable: false,
  configurable: false,
})
console.log(person.name)
console.log(Object.keys(person)) // 열거가 안된다 설정했기 때문에 값이 출력되지 않음 enumerable flase 니까
output:
bar
[ 'age' ]
```

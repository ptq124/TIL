# 프로토타입

C++. Java는 객체지향 프로그래밍 언어, 자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어이다.
이해를 위해 객체지향의 중요한 점은 상속, 프로토타입은 복제라는 점을 기억하면 좋다.

자바스크립트는 원시타입을 제외하면 나머진 다 객체다. 객체는 참조를 통해 이뤄지는데 프로토타입에선 **\_\_proto**\_\_ 접근자 프로퍼티 사용하여 참조한다. (프로토타입 링크라고 한다.)

예를들어 Array filter를 생각해보자
MDN에 filter를 검색하면 **Array.prototype.filter()** 로 나온다.

왜 **prototype**이 붙어 있는지 생각해보면서 프로타입이 뭔지 알아가 보자!

### 프로토타입의 이해

```jsx
function Person(name) {
  this.name = name

  this.hello = function () {
    console.log(`이름: ${this.name}`)
  }
}

const foo = new Person('foo')
const bar = new Person('bar')

foo.hello() //"이름: foo"
bar.hello() //"이름: bar"
```

위 코드를 보면 Person이 생성될 때마다 메서드 hello가 중복된다. (프로퍼티인 name은 생성자 마다 다르니 pass)

그래서 코드를 수정해 보면 아래처럼 바꿀 수 있다.

```jsx
function Person(name) {
  this.name = name
}
// **
Person.prototype.hello = function () {
  console.log(`이름: ${this.name}`)
}
// **
const foo = new Person('foo')
const bar = new Person('bar')
foo.hello() //"이름: foo"
bar.hello() //"이름: bar"
```

프로토타입을 통해 hello 메서드를 지정함으로써, Person객체가 생성될 때마다 불필요한 메서드가 중복이 안된다.

즉 프로토타입은 메소드의 불필요한 중복을 제거한다. 공통적으로 사용할 메서드나 프로퍼티를 프로토타입으로 미리 구현하면 별도 구현 없이 공유해서 사용가능하다.

```jsx
function 강아지() {
  this.age = 10
  this.type = '포유류'
}
const 강아지1 = new 강아지()
console.log(`강아지 나이: ${강아지1.age}`) // "강아지 나이: 10"

function 참새() {
  this.type = '조류'
}
참새.prototype = 강아지1 // 강아지1 프로퍼티를 상속 받음

const 참새1 = new 참새()
console.log(`참새 나이: ${참새1.age}, 종류: ${참새1.type}`) // "참새 나이: 10, 종류: 조류"
```

강아지 객체를 참새가 참조함으로써 강아지에 있는 프로퍼티를 이용할 수 있다. 가능한 이유는 프로토타입 체이닝 때문이다.

이 같은 원리를 통해 프로토타입은 상위 프로토타입을 참조하면서 최종적으로 Object.prototype까지 프로퍼티 검색한다.

프로토타입 체인: 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 매커니즘, **\_\_proto**\_\_ 접근자 프로퍼티 사용하여 참조한다

### 직접 상속

생성자나 new 키워드는 프로토타입 체이닝을 연결하는 법 보다 더 쉬운 방법이 있다.

```jsx
const Person = {
  이름: function (name) {
    this.name = name
  },
  자기소개: function () {
    return '저는 ' + this.name
  },
}
const 첫만남 = Object.create(Person) // Person을 프로토타입으로 지정
첫만남.인사 = function () {
  console.log('안녕하세요, ' + this.자기소개() + ' 입니다.')
}

const foo = Object.create(첫만남) // 첫만남을 프로토타입으로 지정
foo.이름('foo')
foo.인사()
```

위 코드 처럼 Object.create를 사용하면 명시적으로 프로토타입을 지정할 수 있다.

즉 프로토타입 체이닝을 통해 프로토타입을 쉽게 연결했다.

`MDN에 filter를 검색하면 **Array.prototype.filter()** 로 나온다.`

`왜 **prototype**이 붙어 있는지 생각해보자`

이 질문에 대한 답을 한다면, Array객체는 filter메서드를 프로토타입을 통해 상속 받고 있으며, 우린 filter메서드를 따로 생성하지 않아도 참조에 의해 사용할 수 있다.

즉 중복 생성하지 않고, 쉽게 메서드를 사용할 수 있다.

### 정리

- 자바스크립트는 프로토타입 기반 객체지향 언어이다.
- 프로토타입 기반 언어인 자바스크립트의 객체는 원형으로부터 생성된다..
- 생성된 객체는 프로토타입 접근자(링크) **proto** 를 통해 원형을 참조한다.
- 객체들 사이에 형성된 프로토타입 링크를 프로토타입 체인이라 한다.

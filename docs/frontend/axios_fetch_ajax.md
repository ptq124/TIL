# axios, fetch, ajax

### axios

axios는 Node.js와 브라우저를 위한 **Promise API**를 활용하는 HTTP 통신 **외부 라이브러리**

- 자동 Json, 문자열 반환
- 구문의 간결성, Ajax의 코드 보다 훨씬 간결
- response timeout 처리 방법이 있다. (fetch에는 존재하지 않는 기능)
- promise 기반으로 다루기가 쉽다. (비동기 처리를 위한 콜백 패턴에서 자유로움)
- 크로스 브라우징에 신경을 많이썼기에 브라우저 호환성이 뛰어나다.
- 모든 HTTP 에러를 reject하는 프로미스를 반환

### fetch:

ES6부터 JavaScript의 내장 라이브러리,

- 내장 라이브러리이기에 별도의 import를 해줄 필요가 없다.
- promise 기반으로 다루기가 쉽다. (비동기 처리를 위한 콜백 패턴에서 자유로움)
- 내장 라이브러리이기에 axios 보다 빠르다.

단점:

- Not Found 404와 같은 HTTP 에러를 처리해 주지 않는다. 불리언 타입의 ok 상태를 체크해야 함

### ajax:

Asynchronous JavaScript And XML

- ajax는 웹브라우저와 웹서버 간에 데이터를 비동기적으로 교환하는 기술이다.
- Web API인 XMLHttpRequest 객체를 기반으로 동작

단점:

- 복잡한 구문
- 콜백 지옥에 빠질 수 있음

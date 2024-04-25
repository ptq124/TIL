# property attribute차이

### attribute 란 ?

attribute 는 html 문서에서 elements 에 추가적인 정보를 넣을 때 사용되는 요소

예를 들어, <div class= ‘my-class’></div>라는 ‘my-class’라는 클래스 속성을 가진 div 요소에서 div 는 element(요소) 이고 class 는 attribute(속성) 가 되며 ‘my-class’ 는 class attribute의 value(값)가 됨

### property 란?

property는 html DOM 안에서 attribute 를 가리키는(혹은 대신하는) 표현

```jsx
DIV node
- nodeName = 'DIV'
- className = 'my-class'
- style = .....
```

위 내용은 <div class= ‘my-class’></div> 태그를 DOM 으로 표현한 것인데 위에서 className이 property, 다시 말하면 html 문서 안에서는 class가 attribute를 의미하지만 html DOM 안에서는 property를 의미한다.

### attribute와 property를 구분하는 차이 또는 차이점이 무엇일까?

attribute는 html document/file 안에서 property 는 html DOM tree안에서 존재. 이것이 뜻하는 것은 **attribute는 정적**으로 변하지 않고 **property는 동적**으로 그 값이 변할 수 있다는 것을 내포하고 있다.

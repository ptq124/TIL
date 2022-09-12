# 이터레이션 프로토콜 (Iteration Protocol)

Iteration Protocol은 순회가 가능한 규격을 뜻함 

mdn 사이트에 검색해보면 Iteration Protocol은 (ES6)에는 새로운 문법들이 추가되어 2개의 protocol 을 충족시키면 어떠한 객체에서도 구현될 수 있다고 나옴

1.iterable protocol

2.iterator protocol 

이 두가지를 충족하면 Iteration Protocol임 

## iterable protocol

```js
{
	[symbol.iterator]():iterator
}
```
iterable protocol 기본 구조임

[symbol.iterator] 메소드에 iterator protocol을 따르는 객체를 반환해야 함


```js
interface Array<T> {
    /** Iterator */
    [Symbol.iterator](): IterableIterator<T>;

    /**
     * Returns an iterable of key, value pairs for every entry in the array
     */
    entries(): IterableIterator<[number, T]>;

    /**
     * Returns an iterable of keys in the array
     */
    keys(): IterableIterator<number>;

    /**
     * Returns an iterable of values in the array
     */
    values(): IterableIterator<T>;
}

```
Iteration Protocol을 따르는 데이터 타입중 Array의 정의를 보면 이렇게 설명가능함

[Symbol.iterator](): 따르는 메소드가 있는데 이 메소드들은 entries,keys,values가 있다. 이 메소드들은 iterator protocol을 따르는 객체를 반환함 

정리하면 심볼 메소드를 정희하고 iterator protocol을 따르는 객체를(next 와 같은) 반환하면 iterable protocol이구나 생각하면됨

## iterator protocol

```js
interface Iterator<T, TReturn = any, TNext = undefined> {
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return?(value?: TReturn): IteratorResult<T, TReturn>;
    throw?(e?: any): IteratorResult<T, TReturn>;
}
```
iterator protocol의 구조를 보면 위와 같다. iterable protocol은 Iterator객체를 반환할때 next와 같은 함수의 리턴값을 반환하게 되는데 이건 배열로 따지면 다음 인덱스의 값을 뜻한다. 


아래는 next를 써서 일반 객체를 Iteration(순회 가능) 하게 구현해봄 
```js
const multiple = {
    [Symbol.iterator](){
        const max=10
        let num=0
        return{
            next(){
                return {value: num++,done: num>max}
            }
        }
    },
}
for(const num of multiple){
    console.log(num)
}

output
0
1
2
3
4
5
6
7
8
9
```
multiple객체를 [Symbol.iterator] 를 정의 하고 Iterator 프로토콜을 반환했다. next메소드를 통해 0부터 10까지 차례대로 숫자를 실행하도록 구현 
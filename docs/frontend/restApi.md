# Rest API 특징

## Uniform interface

API 자원들은 **각각 독립적인 인터페이스**를 가짐.

각각의 자원들이 url 자원식별, 표현을 통한 자원조작, Self-descriptive messages, HATEOAS 구조를 가지는 것을 말함

`독립적인 인터페이스?`

- `서로 종속적이지 않은 인터페이스`
- `예를 들어 웹페이지를 변경 했을 때, 웹 브라우저를 업데이트하는 일은 없어야 함. 또한 HTTP명세나 HTML명세가 변경되도 웹페이지는 잘 작동해야함`

url 자원식별

- identification of resources를 말함. 자원은 url로 식별되어야 함.

표현을 통한 자원조작

- url과 GET, DELETE 등 HTTP표준메서드 등을 통해 자원 조회, 삭제 등 작업을 설명할 수 있는 정보가 담겨야함
- 예: /getproduct → 안됨, get은 표준메서드를 사용해 표현, /product를 사용해야함

Self-descriptive messages

- HTTP Header에 타입을 명시하고 각 메시지자원들은 MIME types에 맞춰 표현되어야 함.
- `MIME types?: 문서, 파일 등의 특성과 형식을 나타내는 표준. 예: font/ttf, text/plain, text/csv등`
- 예: .json을 반환한다면 application/json으로 명시해야함.
- 예: json타입의 데이터를 보낼 때 헤더의 Content-Type = application/json을 명시해야 함

HATEOAS 구조

- 하이퍼링크에 따라 다른 페이지를 보여줘야 하며 데이터마다 어떤 URL에서 원했는지 명시해야함
- 보통 href, links, link, url 속성 중 하나에 해당 데이터의 URL을 담아서 표기

## Stateless (무상태성)

HTTP 자체가 Stateless이기 때문에 HTTP를 이용하는 것만으로도 만족됨.

REST API를 제공해주는 서버는 세션을 해당 서버쪽에 유지하지 않는다는 의미

## Cacheable (캐시 처리 가능)

HTTP는 자동으로 캐싱이 됨

`HTTP 헤더의 Cach-control = no-store로 하면 캐싱 안됨. 디폴트는 Cach-control = public`

## Client-Server 구조

클라이언트 서버가 독립적인 구조를 가져야함

서버에서 HTTP표준만 지킨다면 웹에는 그에 따른 화면이 잘 나타남

서버는 API를 제공하고, API에 맞는 로직을 처리

클라이언트는 HTTP로 받는 로직만 처리

## Layered SysTemp (계층화)

- 클라이언트와 서버가 분리되어 있기 때문에 중간에 프록시 서버, 암호화 계층 등 중간매체를 사용할 수 있어 자유도가 높다.

# REST API의 URI 규칙

- 동작은 HTTP 메서드로만. url의 해당 내용이 들어가면 안됨. put, delete, post, get을 이용
  - 예: /books/delete/1 이런게 안된다는 거
- .jpg, .png등 확장자 표시 안됨
- 동사가 아닌 명사로만
- 계층적인 내용이 담겨야함. 예: /집/아파트/전세
- 대문자가 아닌 소문자로만 쓰며 너무 길 경우 언더바\_ 가 아닌 그냥 바- 사용
- HTTP 응답 코드 활용. 성공시 200, 리다이렉트 301등

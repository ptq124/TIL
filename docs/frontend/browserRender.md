# 브라우저 렌더링

### HTML 파싱 → DOM 트리 생성

서버에서 HTML 파일을 보냄

바이트:

- HTML 문서를 바이트(2진수) 형태로 바꿈, 바이트 스트림

문자:

- 바이트를 문자로 변환
- meta 태그의 charset어트리뷰트에 의해 지정된 인코딩 방식을 기준으로 변환

토근:

- HTML 문자들을 분석해 토근화 진행

노드:

- 문서 노드, 요소 노드, 텍스트 노드 생성

DOM:

- DOM 완성
- HTML 요소들이 중첩 관계를 갖음

### CSS 파싱 → CSSOM 트리 생성

DOM 트리 과정과 동일

바이트 → 문자열 → 토근 → 넏, → CSSOM 과정

### 렌더 트리 생성

DOM 과 CSSOM 을 결합해 렌더 트리 생성

`display: none 은 포함되지 않음`

### 레이아웃 (리플로우)

렌더 트리의 HTML 과 레이아웃을 계산하여 레이아웃 트리 생성

position, left, top

width, height, margin, padding

border, display, font-size, text-align ….

`리플로우와 리페인트가 반드시 순차적으로 실행될 필요는 없다`

`레이아웃의 영향이 없는 변경은 리플로우 없이 리페인트만 실행`

### 페인트 (리페인트)

시각적인 요소들을 그려냄

background, box-shadow,

border-radius, border-style

color, …

`transform, opacity는 리플로우 리페인트 생략`

`GPU가 관여할 수 있는 속성`

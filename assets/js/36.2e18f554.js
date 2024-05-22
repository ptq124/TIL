(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{307:function(o,v,_){"use strict";_.r(v);var n=_(13),t=Object(n.a)({},(function(){var o=this,v=o._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[v("h1",{attrs:{id:"결합도-응집도"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#결합도-응집도"}},[o._v("#")]),o._v(" 결합도 응집도")]),o._v(" "),v("p",[o._v("결합도(Coupling)과 응집도(Cohesion)에 대해서 알아보기 전에 **모듈화(Modularization)**에 대해 먼저 알아볼 필요가 있다.")]),o._v(" "),v("p",[v("strong",[o._v("모듈화란")]),o._v(" 소프트웨어를 각 기능별로 나누는 것을 말한다.")]),o._v(" "),v("p",[v("strong",[o._v("좋은 모듈화")]),o._v("는 "),v("strong",[o._v("목적")]),o._v("에 맞는 "),v("strong",[o._v("기능")]),o._v("만으로 모듈을 나누는 것이다.")]),o._v(" "),v("ul",[v("li",[o._v("각각의 모듈은 주어진 기능만을 독립적으로 수행하며 다른 모듈과 적게 연관돼야 한다.")]),o._v(" "),v("li",[o._v("독립성이 높은 모듈일수록 좋다.\n"),v("ul",[v("li",[o._v("독립성이 높으면 해당 모듈을 수정하더라도 다른 모듈에 끼치는 영향이 적으며 오류가 발생하더라도 쉽게 문제를 발견하고 해결할 수 있는 장점을 갖는다")])])])]),o._v(" "),v("p",[v("strong",[o._v("모듈의 독립성은 모듈의 결합도(Coupling)과 응집도(Cohesion)로 측정한다.")]),o._v("\n 결론적으로는 모듈의 독립성을 높이기 위해서는 모듈 간의 상호 의존 정도를 나타내는 결합도를 낮추고 모듈이 독립적으로 자체 기능만을 수행하도록 응집도를 높여야 한다.")]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("결합도(Coupling)란?")])])]),o._v(" "),v("p",[o._v("결합도는 서로 다른 모듈 간에 상호 의존하는 정도 또는 연관된 관계를 의미한다")]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("자료 결합도(Data Coupling) -")])]),o._v(" 가장 낮은 결합도를 갖는다. 가장 좋은 형태다.")]),o._v(" "),v("ul",[v("li",[o._v("모듈끼리 단순히 파라미터 등을 통해 데이터를 주고받는 경우다.")])]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("스탬프 결합도(Stamp Coupling)")])])]),o._v(" "),v("ul",[v("li",[o._v("두 모듈이 동일한 자료 구조를 참조하는 형태의 결합도이다. 즉, 모듈 간의 인터페이스로 배열 또는 오브젝트 등이 전달되는 경우를 말한다. 자료 구조의 형태가 변경되면 그것을 참조하는 모든 모듈에 영향을 주며 변경되는 필드를 실제로 참조하지 않는 모듈에도 영향을 준다.")])]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("제어 결합도(Control Coupling)")])])]),o._v(" "),v("ul",[v("li",[o._v("어떤 모듈이 다른 모듈 내부의 논리적인 흐름을 제어하는 요소를 전달하는 경우를 말한다. 예를 들면, 파라미터로 전달되는 값에 따라서 모듈 내부 로직의 처리가 달라지는 Flag 값 등으로 결합되는 형태다.")])]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("외부 결합도(External Coupling)")])])]),o._v(" "),v("ul",[v("li",[o._v("외부 결합도는 모듈이 외부의 데이터, 통신 프로토콜 등을 공유할 때 발생한다.")])]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("공통 결합도(Common Coupling)")])])]),o._v(" "),v("ul",[v("li",[o._v("여러 모듈이 하나의 데이터 영역을 참조하여 사용하는 형태다. 전역 변수(global variable)를 예로 들 수 있다. 전역 변수의 변경이 여러 모듈에 영향을 끼칠 수 있다.")])]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("내용 결합도(Content Coupling) -")])]),o._v(" 가장 높은 결합도를 갖는다. 가장 좋지 않은 결합 형태다.")]),o._v(" "),v("ul",[v("li",[o._v("어떤 모듈이 사용하려는 다른 모듈의 내부 기능과 데이터를 직접 참조하는 경우다.")]),o._v(" "),v("li",[o._v("다른 모듈의 로컬 데이터에 접근하는 경우처럼 사용하고자 하는 모듈의 내용(코드)을 알고 있어야 한다. 모듈이 변경이 발생하는 경우 이를 참조하는 모듈의 변경이 반드시 필요하게 되므로 가장 좋지 않은 결합이다.")])]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("응집도(Cohesion)란?")])])]),o._v(" "),v("p",[o._v("응집도는 한 모듈 내부의 처리 요소들이 서로 관련되어 있는 정도를 말한다")]),o._v(" "),v("p",[v("strong",[o._v("기능적 응집도(Functional Cohesion) - 응집도가 가장 높으며, 가장 좋은 형태이다.")])]),o._v(" "),v("ul",[v("li",[o._v("모듈 내의 모든 요소들이 하나의 기능을 수행하기 위해 구성된 경우를 말한다.")])]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("순차적 응집도(Sequential Cohesion)")])])]),o._v(" "),v("ul",[v("li",[o._v("한 요소의 출력이 다른 요소의 입력으로 사용되는 형태이다. 어떤 모듈이 특정 파일을 읽고 처리하는 기능을 하는 등과 같다")])]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("통신적 응집도(Communicational Cohesion)")])])]),o._v(" "),v("ul",[v("li",[o._v("모든 요소들이 동일한 입력 또는 출력 데이터를 사용하여 서로 다른 기능을 수행하는 경우다. 앞서 살펴본 순차적 응집도와 다르게 처리 순서가 중요하지 않다.")])]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("절차적 응집도(Procedural Cohesion)")])])]),o._v(" "),v("ul",[v("li",[o._v("모듈내에서 여러 개의 기능 요소가 순차적으로 수행되지만 다음 기능 요소로 데이터가 아닌 흐름 제어 요소가 전달되는 경우")])]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("일시적 응집도(Temporal Cohesion)")])])]),o._v(" "),v("ul",[v("li",[o._v("각 기능 요소들이 순서에 상관없이 특정 시점에 반드시 수행되는 경우다.")])]),o._v(" "),v("p",[v("strong",[v("strong",[o._v("논리적 응집도(Logical Cohesion)")])])]),o._v(" "),v("ul",[v("li",[o._v("유사한 성격을 갖거나 특정 형태로 분류되는 처리 요소들로 모듈을 구성하며 논리적으로 비슷한 기능을 수행하지만 서로의 관계는 밀접하지 않은 형태다. 코드를 예제로 들면 다음과 같다.")])]),o._v(" "),v("p",[v("strong",[o._v("우연적 응집도(Coincidental Cohesion) - 가장 좋지 않은 응집도다.")])]),o._v(" "),v("ul",[v("li",[o._v("모듈 내부의 각 구성 요소들이 아무런 관련 없이 구성된 형태다")])]),o._v(" "),v("h3",{attrs:{id:"결론"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#결론"}},[o._v("#")]),o._v(" 결론")]),o._v(" "),v("p",[o._v("같은 목적을 가진 기능끼리 하나의 모듈에 모아두는 것은 높은 응집도를 갖기 때문에 소프트웨어 디자인 측면에서 좋다. (물론, 모듈의 독립성을 높이기 위해서는 모듈의 크기 축소도 필요하다.)")]),o._v(" "),v("p",[o._v("비슷한 기능을 수행하기 때문에 "),v("strong",[o._v("기능에 변화가 발생할 때 유지보수가 용이하며 해당 모듈을 재사용")]),o._v(" 할 수도 있기 때문이다.")]),o._v(" "),v("ul",[v("li",[v("strong",[o._v("결론적으로 결합도는 낮고 응집도가 높은 모듈로 설계하는 것이 좋다.")])])]),o._v(" "),v("p",[v("a",{attrs:{href:"https://madplay.github.io/post/coupling-and-cohesion-in-software-engineering",target:"_blank",rel:"noopener noreferrer"}},[o._v("참고 - 결합도 응집도"),v("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=t.exports}}]);
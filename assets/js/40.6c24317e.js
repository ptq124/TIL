(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{311:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fast-api-로-db-세팅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fast-api-로-db-세팅"}},[t._v("#")]),t._v(" Fast API 로 DB 세팅")]),t._v(" "),s("h2",{attrs:{id:"폴더구조"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#폴더구조"}},[t._v("#")]),t._v(" 폴더구조")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-root")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-routers\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-test.py \n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-db.py\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-main.py\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-models.py\n")])])]),s("h2",{attrs:{id:"main-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#main-py"}},[t._v("#")]),t._v(" main.py")]),t._v(" "),s("p",[t._v("maim.py는 fastapi 공식문서보고 만들면됨")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" uvicorn\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" fastapi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FastAPI\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" fastapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cors "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" CORSMiddleware\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" db "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" database\n\ntags_metadata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#스웨거 부제목 api목록으로 여러개 만들수 있음")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'description'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#name 간단 설명")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FastAPI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\ttitle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#"스웨거에 제목이 표시됨"')]),t._v("\n\topenapi_tags"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tags_metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#cors처리 공식문서 보면 자세한 설명이 나옴")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  CORSMiddleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  allow_origins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  allow_credentials"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  allow_methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  allow_headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#@app.get("/")')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#async def root():")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#return {"message": "Hello World"}')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#uvicon main:app --reload 명령어 말고 python main.py로 실행할 수 있음")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  uvicorn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main:app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("reload")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" debug"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"db-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#db-py"}},[t._v("#")]),t._v(" db.py")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" databases\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" asyncio "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" current_task\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asyncio "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AsyncSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" create_async_engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" async_scoped_session\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sessionmaker\n\n\nSQLALCHEMY_DATABASE_URL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getenv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DB_URL'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mysql+aiomysql://<user>:<password>@<host>:<port>/<db> ?charset=utf8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \ndatabase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" databases"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Database"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SQLALCHEMY_DATABASE_URL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nengine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_async_engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SQLALCHEMY_DATABASE_URL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pool_recycle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nasync_session_factory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sessionmaker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" class_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("AsyncSession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Dependency")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  db "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" async_scoped_session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("session_factory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("async_session_factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scopefunc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("current_task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" db "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#db연결 성공했으면 시작")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remove"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#세션이 시작된 후, api호출이 끝나면 db세션을 닫아줌")]),t._v("\n")])])]),s("h3",{attrs:{id:"메소드-정리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메소드-정리"}},[t._v("#")]),t._v(" 메소드 정리")]),t._v(" "),s("p",[s("strong",[t._v("create_engine")]),t._v(" :  인자값으로 "),s("strong",[t._v("DB URL")]),t._v("을 추가하면 "),s("strong",[t._v("DB Host에 DB 연결을 생성")]),t._v("한다. 이 함수가 DB연결의 출발점이다.")]),t._v(" "),s("p",[s("strong",[t._v("sessionmaker")]),t._v(": 호출되었을 때, 세션을 생성해준다")]),t._v(" "),s("p",[s("strong",[t._v("bind")]),t._v(" : "),s("strong",[t._v("어떤 엔진을 통해 DB연결을 할지 결정하는 부분")]),t._v("이다. MySQL, PostgreSQL 등 여러 SQL의 DB URL 중 어느 SQL제품으로 연결을 진행할지 선택하는 부분이다. 위의 부분에서는 engine변수가 하나밖에 선언되어있지 않지만, SQL을 여러 종류 쓰는 경우, 각 SQL에 맞게 해당 부분이 여러종류로 나뉠 수 있다.")]),t._v(" "),s("h2",{attrs:{id:"models-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#models-py"}},[t._v("#")]),t._v(" models.py")]),t._v(" "),s("p",[t._v("models.py는 간단함 먼저 dbeaver설치하고 데이터테이블 만들어라")]),t._v(" "),s("p",[t._v("그리고 스크립트 파일을 만들자")]),t._v(" "),s("p",[t._v("ORM 모델 클래스 생성 스크립트 파일 추출")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("sqlacodegen mysql+pymysql://"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./models.py"')]),t._v("\n")])])]),s("p",[t._v("폴더에 models.py가 생성되고 dbeaver 생성했던 테이블이 그대로 파이썬 파일로 저장된다.")])])}),[],!1,null,null,null);s.default=r.exports}}]);
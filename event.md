# Event

- 앞서 js파일은 html에 load되어야 사용할 수 있기 때문에 script태그를 사용해서 적재 시켜야한다.
- 적재를 해야 browser에서 js가 document에 접근하 수 있게 해준다.
- Element의 내부 구성요소를 확인하고 싶을 때는 `console.dir()`을 사용한다.
- 그 중 on으로 시작하는 property들이 event에 해당
- event는 어떤 행위를 하는 것을 의미
- js는 모든 event를 listen할 수 있다.
- `eventListener`: event를 listen하고 js에게 그 내용을 전달하기 위함
- `Variable명.addEventListener(event명, 실행내용)`: Variable명에 일어나는 특정 event를 정의하고 event가 발생하면, 작성된 실행내용을 실행
> 💡 function에서 ()를 추가함으로써 실행버튼을 누를 수 있음.
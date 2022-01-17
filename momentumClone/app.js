// #login-form Element를 가져오는 방법1
// const loginForm = document.querySelector("#login-form");
// // element 내부에 또 다른 element가 존재할 때 사용가능(정밀조사 가능)
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// #login-form Element를 가져오는 방법2
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// const link = document.querySelector("a");

function onLoginBtnClick() {
  const userName = loginInput.value;
  // form이 submit이 되고 있기 때문에 페이지가 새로 고침이 됨
  console.log("hello " + userName);
  // if(username ==="") {
  //   alert("please write your name");
  // } else if(username.length > 15) {
  //   alert("Your name is too long");
  // } else {
  //   alert("Welcome to here");
  // }
  // form을 활용한 유효성 검사를 html에서 실행하면 js에서는 위의 코드를 사용할 필요가 없음
}

const HIDDEN_CLASS = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); // 기본동작 실행 제어
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
  // console.log(event);
  // console.log(loginInput.value);
  console.log(username);
}

// function goLink(event) {
//   event.preventDefault();
//   console.log(event);
//   console.dir(event);
// }

loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", goLink);

// #login-form Element를 가져오는 방법1
// const loginForm = document.querySelector("#login-form");
// // element 내부에 또 다른 element가 존재할 때 사용가능(정밀조사 가능)
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// #login-form Element를 가져오는 방법2
// const loginInput = document.querySelector("#login-form input");
// const loginBtn = document.querySelector("#login-form button");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username"

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem(USERNAME_KEY);

// const link = document.querySelector("a");

// function onLoginBtnClick() {
//   const userName = loginInput.value;
//   // form이 submit이 되고 있기 때문에 페이지가 새로 고침이 됨
//   console.log("hello " + userName);
//   // if(username ==="") {
//   //   alert("please write your name");
//   // } else if(username.length > 15) {
//   //   alert("Your name is too long");
//   // } else {
//   //   alert("Welcome to here");
//   // }
//   // form을 활용한 유효성 검사를 html에서 실행하면 js에서는 위의 코드를 사용할 필요가 없음
// }

function paintGreetings(username) {
  greeting.innerHTML = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASS);
}

function onLoginSubmit(event) {
  event.preventDefault(); // 기본동작 실행 제어
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  // console.log(username);
}

// Algorithm
if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
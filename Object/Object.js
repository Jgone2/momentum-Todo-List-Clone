const playerName = "gon";
const playerPoints = 121212;
const playerAwesome = true;
const playerLevel = "low"

console.log(playerName);
console.log(playerPoints);
console.log(playerLevel);

// 위의 경우 변수들이 서로 연관성이 없음
// player.name
// player.point
// 이를 해결하기 위해 array를 사용할 수 있다.
const playerArr = ['gon', 121212, true, 'low'];
console.log(playerArr);
// array를 사용하면 변수들을 통합할 수 있지만, 각 데이터들의 의미를 알 수 없음.
// player[0] = name
// player[1] = point
// 의미를 알기 위해서는 주석을 사용해야 하지만 더 좋은 방법이 필요

// Object는 
const player = {
  // player내부에 속하기 때문에 player를 따로 작성할 필요 없음
  name: "gon", // 각 attribute는 세미콜론(;)이 아닌 콤마(,)로 구분해서 attribute를 여러가지 입력할 수 있다.
  points: 10,
  awesome: true,
  level: "low",
}

console.log(player);
console.log(player.name);
console.log(player.level);
console.log(player['name']);

//값 변경
player.awesome = false;
player.points = 56;
console.log(player);
player.points = player.points + 10;
console.log(`playerPoint is ${player.points}`);
// constat는 수정할 수 없는데 어떻게 수정을 했는가. Err는 constant 전체를 변경할 때 err가 발생하는데 constant내의 arr이나 obj의 일부 값을 update는 가능
player.lastName = "kim";
console.log(player);

// 객체 배열 (배열 안에 객체가 3개가 들어가 있음)
const userList = [
    {id:1, name:'곰', address: '서울'},
    {id:2, name:'여우', address: '대전'},
    {id:3, name:'사자', address: '부산'}
];

// 컨테이너
const container = document.querySelector('.container');
// forEach함수는 for문이랑 비슷하다 (반복문을 간단하게 쓸 수 있는 문법)
userList.forEach((userData) => {
    // 각 요소 데이터를 화면에 출력
    container.innerHTML += `
    <div class = "card">
        <h2>${userData.name}</h2>
        <p>지역 : ${userData.address}</p>
    </div>
    `;
});

// 백틱을 쓰면 +로 연결 할 필요가 없음

// let num = 2;
// let dummy = num + '출력합니다';

// let dummy = `${num} 출력합니다`



// 원래 화살표함수가 이런 형태임

// function aa (userData) {
//     container.innerHTML += `
//     <div class = "card">
//         <h2>${userData.name}</h2>
//         <p>지역 : ${userData.address}</p>
//     </div>
//     `;
// }
// aa(userList)
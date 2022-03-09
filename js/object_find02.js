// id 와 name 를 가지는 유저 배열
const userDataList = [
    {id : 123, name : '곰'},
    {id : 1021, name : '사자'},
    {id : 6021, name : '여우'}
];

// 검색ID 입력창
const searchIdInput = document.querySelector('#search-id-input');
// 검색 결과 출력 위치
const searchResult = document.querySelector('#search-result');

// 문자가 입력 될 때마다 내용 체크
searchIdInput.addEventListener('keyup', () => {
    // 검색 id를 비교해서 가져오기
    const searchId = Number(searchIdInput.value);
    findUser(searchId) // 키가 입력될 때마다 밑에있는 함수가 계속 실행
})

// 유저 검색하는 함수 정의
function findUser(searchId){
    // 해당하는 데이터를 가져오기
    const targetData = userDataList.find(function(data){
        return data.id === searchId;
    });

    // 해당 유저가 없으면 없다고 화면에 출력
    if(targetData == undefined){
        searchResult.innerHTML = '유저 검색 결과 없음';
        return; // 함수에서 빠져나오고 싶으면 리턴을 적자
    }
    // 해당 유저가 있으면 화면에 그 유저의 이름을 출력
    searchResult.innerHTML = targetData.name;
}
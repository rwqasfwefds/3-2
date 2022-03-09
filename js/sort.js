// 회원 데이터
const userDataList = [
    {id : 2, name : '곰'},
    {id : 10, name : '여우'},
    {id : 4, name : '사자'},
    {id : 29, name : '기린'},
    {id : 101, name : '호랑이'}
];

// 데이터를 목록 태그를 이용해서 화면에 표시하는 함수
function updateList(){
    let listHtml = '';
    
    for(const data of userDataList){
        listHtml += `<li>${data.id} : ${data.name}</li>`
    }
    
    document.querySelector('.user_list').innerHTML = listHtml;
}

// 오름차순 정렬 함수
function sortByAscending(){
    userDataList.sort(function(a,b){
        return a.id - b.id;
    });
    // 오름차순 후 화면에 출력
    updateList();
}

// 내림차순 정렬 함수
function sortByDescending(){
    userDataList.sort(function(a,b){
        return b.id - a.id;
    });
    // 내림차순 후 화면에 출력
    updateList();
}

// 오름차순 버튼
let ascending = document.querySelector('.ascending');
// 내림차순 버튼
let descending = document.querySelector('.descending');

// 오름차순 버튼 클릭시 오름차순 함수 실행
ascending.addEventListener('click', () => {
    sortByAscending();
})
// 내림차순 버튼 클릭시 내림차순 함수 실행
descending.addEventListener('click', () => {
    sortByDescending();
})

// 초기 화면 실행 될때는 오름차순으로 정렬
sortByAscending();
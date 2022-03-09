// 전화번호 입력란
const phoneNumberText = document.querySelector('#phoneNumberText');

// 경고 메세지 출력란
const warningMessage = document.querySelector('#warningMessage');

// 문자가 입력될 때마다 내용 체크 (feat.화살표 함수)
phoneNumberText.addEventListener('keyup', () => {
    // 입력 된 전화번호
    const phoneNumber = phoneNumberText.value;

    // 전화번호에 하이픈(-)이 포함되면 공백('')으로 변환
    const trimmedPhoneNumber = phoneNumber.relpace(/-/g,"");  /*정규 표현식 슬래쉬 중앙에 들어가있는 새끼가 바꿀대상 g는 바꿀대상이 여러개 있을때 씀, 뒤에 있는 ''로 바꿈 */   // 010-1238-4567 -> 01012384567 이렇게 바꿈 // 숫자의 갯수를 보고 유효성 체크를 함

    // 0으로 시작하는 10자리 혹은 11자리의 번호,형식 체크
    // 0부터 시작되는 0~9까지의 숫자 체크
    if(/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) == false){
        warningMessage.innerHTML = "전화번호의 형식에 맞춰 입력해 주세요";
    } else{
        warningMessage.innerHTML = "";
    }
})
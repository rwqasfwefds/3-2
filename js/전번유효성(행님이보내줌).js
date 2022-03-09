// 전화번호 입력란
let phoneNumberText = document.querySelector('#phoneNumberText');

// 경고 메세지 출력란
let warningMessage = document.querySelector('#warningMessage');

// 문자가 입력될 때 마다 내용 체크
phoneNumberText.addEventListener('keyup', () => {
    // 입력된 전화번호
    let phoneNumber = phoneNumberText.value;

    // 전화번호에 하이픈(-)이 포함되면 공백("")으로 변환
    let trimmedPhoneNumber = phoneNumber.replace(/-/g,"");
    // replace ()안에 앞에것-바꿀대상, 뒤에것-바꾸고싶은대상, g는 -가 여러개일 때

    // 0으로 시작하는 10자리 혹은 11자리의 번호, 형식 체크
    if (/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) == false) {
        warningMessage.innerHTML = "전화번호의 형식에 맞춰 입력해 주세요.";
    }
    else {
        warningMessage.innerHTML = "";
    }
})
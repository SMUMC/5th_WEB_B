let register_btn = document.querySelector("#register_btn");
let username = document.querySelector("input#username");
let userpw = document.querySelector("input#userpw");
let usernickname = document.querySelector("input#usernickname");
let useremail = document.querySelector("input#useremail");
let checkpassword = document.querySelector("input#checkpassword");
let close_btn = document.querySelector("#close");
let modal_container = document.querySelector(".modal_container");
let form = document.getElementsByTagName("form");
let passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
let regex = new RegExp("^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$");

let checkPasswordRegex = new RegExp(passwordReg)

function check_name(){ 
    let name_field = document.querySelector("#name_field");
    if(username.value != ""){
        name_field.innerHTML = "멋진이름이네요!"
        name_field.style.color = "green"

        return true;
    }
    else{
        name_field.innerHTML = "필수 입력 항목입니다!"
        name_field.style.color = "red"

        return false;
    }

}
function check_nickname() {
    let nickname_field = document.querySelector("#nickname_field");
    if (usernickname.value.length >= 2 && usernickname.value.length <= 5) {
        nickname_field.innerHTML = "멋진 닉네임이군요!"
        nickname_field.style.color = "green"
        return true;
    } else {
        nickname_field.innerHTML = "닉네임은 2~5글자로 구성해주세요!"
        nickname_field.style.color="red"
        return false;
    }
}

function check_email() { //완료
    let email_field = document.querySelector("#email_field");
    if (regex.test(useremail.value)){
        email_field.innerHTML = "올바른 메일 형식입니다!"
        email_field.style.color = "green"
        return true;
    }
    else{
        email_field.innerHTML = "올바른 메일 형식이 아닙니다."
        email_field.style.color = "red"
        return false;
    }

} 
function check_password() {
    let password_field = document.querySelector("#password_field");
    
    if(password_field.value != ""){
        if (!checkPasswordRegex.test(userpw.value)) {
            password_field.innerHTML = "영어+숫자+특수문자를 조합하여 작성해주세요!"
            password_field.style.color = "red"
            return false;
        }  
        else {
            password_field.innerHTML = "안전한 비밀번호입니다!"
            password_field.style.color = "green"
            return true;
        }
    }
    else{
        password_field.innerHTML = "비밀번호를 입력해주세요"
        password_field.style.color = "red"
        return false;

    }
} 
function check_equal_password() {
    let checkpassword_field = document.querySelector("#checkpassword_field");
    if(checkpassword.value != ""){
        if (userpw.value == checkpassword.value) {
            checkpassword_field.innerHTML = "비밀번호가 일치합니다!"
            checkpassword_field.style.color = "green"
            return true;
        }
        else {
            checkpassword_field.innerHTML = "비밀번호가 일치하지않습니다!"
            checkpassword_field.style.color = "red"
            return false;
        }
    }
    else{
        checkpassword_field.innerHTML = "비밀번호 확인란을 입력해주세요!"
        checkpassword_field.style.color = "red"
        return false;        
    }

}
function register_is_valid(){
    const isNameValid = check_name();
    const isEmailValid = check_email();
    const isNicknameValid = check_nickname();
    const isPasswordValid = check_password();
    const isEqualPasswordValid = check_equal_password();

    const isAllValid = isNameValid && isEmailValid && isNicknameValid && isPasswordValid && isEqualPasswordValid;

    if (isAllValid) {
        let modal_container = document.querySelector(".modal_container");
        let modal = document.querySelector(".modal");

        modal_container.style.display = "flex";
        modal.style.display = "flex"
    }


}
function check_input(){
    if(username.value !="" && userpw.value != "" && usernickname.value != "" && useremail.value != "" && checkpassword.value != ""){
        register_btn.removeAttribute("disabled");
        register_btn.style.backgroundColor= "gray";
    }
}
register_btn.addEventListener("click", () => {
    register_is_valid(); 
})
close_btn.addEventListener("click", () => {
    modal_container.style.display = "none";
})
username.addEventListener("input",check_input);
useremail.addEventListener("input", check_input);
userpw.addEventListener("input", check_input);
checkpassword.addEventListener("input", check_input);
usernickname.addEventListener("input",check_input);

let nameCheck = false
let idCheck = false
let nicknameCheck = false
let emailadressCheck = false
let pwCheck = false
let pwCheckCheck = false

function nameFunction(){
    var name = document.getElementById("name").value
    var nameError = document.getElementById("nameError")
    if (name.trim() === "") {
      nameError.classList.remove("success")
      nameError.classList.add('error')
      nameError.innerHTML = '필수 입력 항목입니다.'
      nameCheck = false
    } else {
      nameError.classList.remove("error")
      nameError.classList.add('success')
      nameError.innerHTML = "멋진 이름이네요!"
      nameCheck = true
    }
    console.log("이름 검증: check =", nameCheck)
    updateBtnColor()
}

function nicknameFunction(){
  var nickname = document.getElementById("nickname").value
  var nicknameError = document.getElementById("nicknameError")
  if(nickname.length <2 || nickname.length > 5 ){
    nicknameError.classList.remove("success")
    nicknameError.classList.add('error')
    nicknameError.innerHTML = '닉네임은 2글자 이상, 5글자 이하입니다.'
    nicknameCheck = false
  } else {
    nicknameError.classList.remove("error")
    nicknameError.classList.add('success')
    nicknameError.innerHTML = "멋진 닉네임이네요!"
    nicknameCheck = true
  }
  console.log("닉네임 검증: check =", nicknameCheck)
  updateBtnColor()
}

function emailadressFunction() {
  var emailadress = document.getElementById("emailadress").value
  var emailadressError = document.getElementById("emailadressError")
  var valid_email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

  if (emailadress.trim() === "") {
    emailadressError.classList.remove("success")
    emailadressError.classList.add('error')
    emailadressError.innerHTML = '이메일을 입력하세요.'
    emailadressCheck = false
  } 
  else if (!valid_email.test(emailadress)) {
    passwordError.classList.remove("success")
    emailadressError.classList.add('error')
    emailadressError.innerHTML = '이메일을 올바르게 입력하세요.'
    emailadressCheck = false
  } 
  else {
    emailadressError.classList.remove("error")
    emailadressError.classList.add('success')
    emailadressError.innerHTML = "올바른 메일 형식입니다."
    emailadressCheck = true
  }
  console.log("이메일 검증: check =", emailadressCheck)
  updateBtnColor()
}

function pwFunction() {
  var password = document.getElementById("password").value
  var passwordError = document.getElementById("passwordError")
  var valid_pw = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/

  if (!valid_pw.test(password)) {
    passwordError.classList.remove("success")
    passwordError.classList.add('error')
    passwordError.innerHTML = '8~20자 영문 대소문자, 숫자, 특수문자를 사용하세요.'
    pwCheck = false
  } else {
    passwordError.classList.remove("error")
    passwordError.classList.add('success')
    passwordError.innerHTML = "안전한 비밀번호입니다."
    pwCheck = true
  }
  console.log("비밀번호 검증: check =", pwCheck)
  updateBtnColor()
}

function pwcheckFunction() {
  var password = document.getElementById("password").value;
  var passwordcheck = document.getElementById("passwordcheck").value;
  var passwordcheckError = document.getElementById("passwordcheckError")

  if (passwordcheck.trim() === "") {
    passwordcheckError.classList.remove("success")
    passwordcheckError.classList.add('error')
    passwordcheckError.innerHTML = '비밀번호를 입력하세요.'
    pwCheckCheck = false
  } 
  else if (password !== passwordcheck) {
    passwordError.classList.remove("success")
    passwordcheckError.classList.add('error')
    passwordcheckError.innerHTML = '비밀번호가 일치하지 않습니다.'
    pwCheckCheck = false
  } 
  else {
    passwordcheckError.classList.remove("error")
    passwordcheckError.classList.add('success')
    passwordcheckError.innerHTML = "비밀번호가 일치합니다."
    pwCheckCheck = true
  }
  console.log("비밀번호 확인 검증: check =", pwCheckCheck)
  updateBtnColor()
}

function updateBtnColor(){
  const submitBtn= document.getElementById('submitbox')
  if((nameCheck&&nicknameCheck&&emailadressCheck&&pwCheck&&pwCheckCheck)==true)
  submitBtn.classList.add('submitbox_success')
  else{
  submitBtn.classList.remove('submitbox_success')
  }
}

function validateAndSubmit() {
  nameFunction()
  nicknameFunction()
  emailadressFunction()
  pwFunction()
  pwcheckFunction()
  
  if ((nameCheck&&nicknameCheck&&emailadressCheck&&pwCheck&&pwCheckCheck)==true) {
    modalOpen()
  } 
}

function modalOpen(){
  document.querySelector('.modal').style.display = 'block'
  document.querySelector('.modalbody').style.display = 'block'
}

const closeBtn = document.querySelector('.closeBtn')
closeBtn.addEventListener('click',modalClose)

function modalClose(){
  document.querySelector('.modal').style.display = 'none'
  document.querySelector('.modalbody').style.display = 'none'
}

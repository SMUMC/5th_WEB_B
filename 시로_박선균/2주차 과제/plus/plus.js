let plus_btn = document.querySelector("#increase");
let minus_btn = document.querySelector("#decrease");
let num = document.querySelector("#number");

plus_btn.addEventListener('click',()=>{
    console.log("increase가 클릭됨");
    num.innerHTML = parseInt(num.innerHTML)+1;
})
minus_btn.addEventListener('click', () => {
    console.log("decrease 클릭됨");
    num.innerHTML = parseInt(num.innerHTML) - 1;
})
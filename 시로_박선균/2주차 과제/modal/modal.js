let open_btn = document.querySelector("#open");
let close_btn = document.querySelector("#close");
let modal_container = document.querySelector(".modal_container");
let modal = document.querySelector(".modal");

let rgba = "rgba(0, 0, 0, 0.5)"; // 문자열로 묶지 않음

open_btn.addEventListener("click", () => {
    modal.style.display = "flex";
    modal_container.style.display = "flex";
    modal_container.style.backgroundColor = rgba; // 변수로 직접 할당
});

close_btn.addEventListener("click", () => {
    modal_container.style.display = "none";
});

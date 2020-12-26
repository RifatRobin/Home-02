
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn1");
const cancleButton = document.querySelector(".cookie-btn2");

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    Cookies.set("webcookies", "true", { expires: 1 });
});

setTimeout(() => {
    if (!Cookies.get("webcookies")) {
        cookieContainer.classList.add("active");
    }
}, 2000);


cancleButton.addEventListener("click", () => {
    document.getElementById('cbtn').value = '';
    alert("you are not 18+")
});
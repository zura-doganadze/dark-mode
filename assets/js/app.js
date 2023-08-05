const icon = document.getElementById("icon");

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "assets/img/sun.png"
    } else {
        icon.src = "assets/img/moon.png"
    }
})
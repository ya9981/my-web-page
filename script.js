const themeBtn = document.getElementById("theme-toggle-btn");
const bodyElement = document.body;

themeBtn.addEventListener("click", function() {
    
    bodyElement.classList.toggle("light-theme");
    
    if (bodyElement.classList.contains("light-theme")) {
        themeBtn.textContent = "🌙 الوضع الداكن";
    } else {
        themeBtn.textContent = "☀️ الوضع الفاتح";
    }
});


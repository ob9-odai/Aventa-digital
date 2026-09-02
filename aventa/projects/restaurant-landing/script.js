function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}


// إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav").classList.remove("active");
    });
});


// أزرار المنتجات
document.querySelectorAll(".food-bottom button").forEach(button => {

    button.addEventListener("click", () => {

        button.innerText = "✓";

        setTimeout(() => {
            button.innerText = "+";
        }, 1500);

    });

});
function toggleMenu() {
    const nav = document.getElementById("nav");

    nav.classList.toggle("active");
}


// إغلاق القائمة عند اختيار رابط
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("nav").classList.remove("active");

    });

});


// تأثير بسيط عند تحريك مؤشر الماوس على بطاقات الخدمات
document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px, #1b2135, #11141c 55%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "";

    });

});
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!");

    // ทำเฉพาะหน้า projects.html
    if (window.location.pathname.endsWith("projects.html")) {
        const titleElement = document.querySelector(".text-gradient");
        if (titleElement) {
            titleElement.textContent = "Project";
        }
    }

    // เพิ่มการคลิกปุ่ม Projects ให้เด้งข้อความแล้วไปหน้า
    const projectLink = document.querySelector('a[href="projects.html"]');
    if (projectLink) {
        projectLink.addEventListener("click", function(event) {
            event.preventDefault(); // หยุดการไปทันที
            alert("คุณกด Projects!");
            window.location.href = this.href; // ไปหน้า projects.html
        });
    }
});

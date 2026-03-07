const menuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.innerText = navLinks.classList.contains('active') ? '✕' : '☰';
});

const findBtn = document.getElementById('find-garden-btn');

findBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const originalText = this.innerText;
    this.innerText = "Searching local maps...";

    setTimeout(() => {
        this.innerText = originalText;
        alert("Found 5 local gardens near you!");
        window.open("https://www.google.com/maps", "_blank");
    }, 1200);
});

document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function () {
        const count = this.querySelector('.count');
        if (!this.classList.contains('liked')) {
            count.innerText = parseInt(count.innerText) + 1;
            this.classList.add('liked');
            this.style.background = "#e74c3c";
        }
    });
});
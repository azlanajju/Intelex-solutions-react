
const
nav = document.querySelector("nav"),
nav_inner = nav.querySelector(".nav-inner");

nav_inner.querySelectorAll("li").forEach((li, idx) => {
li.style.setProperty("--i", idx)
li.addEventListener("mouseleave", () => nav.style.setProperty("--enter-nav", 0))
li.addEventListener("mousemove", (e) => {
    let { clientX: x, clientY: y } = e
    const rect = li.getBoundingClientRect()
    x = ((x - rect.x) - (rect.width / 2)) / rect.width;
    y = ((y - rect.y) - (rect.height / 2)) / rect.height;

    nav.style = `
        --enter-nav: 1;
        --current-item: ${idx};
        --x: ${x};
        --y: ${y}; 
    `
})
})
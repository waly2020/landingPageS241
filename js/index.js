const preload = document.querySelector(".preloader");
const navigation = document.querySelector(".navigation");
const btns = document.querySelectorAll(".btn button");
const cibles = document.querySelectorAll(".cible");

// setTimeout(function () {
//     preload.classList.add("d-done");
// }, 1000);

window.addEventListener("scroll", () => {
    let { scrollY } = window;
    // console.dir(scrollY);
    if (scrollY > 50) {
        navigation.classList.add("active");
    } else {
        navigation.classList.remove("active");
    }
})

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (!btn.classList.contains("active")) {
            for (let i = 0; i < btns.length; i++) {
                let b = btns[i];
                cibles[i].classList.remove("active");
                b.classList.remove("active");
            }
            btn.classList.add("active");
            cibles[parseInt(btn.getAttribute("data-cible"))].classList.add("active");
        }
    })
})
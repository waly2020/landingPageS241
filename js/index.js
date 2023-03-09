// if ($(".preloader").length > 0) {
// Preloader timeout

const preload = document.querySelector(".preloader");
const navigation = document.querySelector(".navigation");

setTimeout(function () {
    // $('.preloader').addClass('d-none');
    preload.classList.add("d-done");
}, 1000);
// };
window.addEventListener("scroll", () => {
    let { scrollY } = window;
    // console.dir(scrollY);
    if (scrollY > 50) {
        navigation.classList.add("active");
    } else {
        navigation.classList.remove("active");
    }
})
// if ($(".preloader").length > 0) {
// Preloader timeout

const preload = document.querySelector(".preloader")
setTimeout(function () {
    // $('.preloader').addClass('d-none');
    preload.classList.add("d-done");
}, 1000);
// };
const content_calandly = document.querySelector(".content-calandly");
const active_calandy = document.querySelectorAll(".active_calandly");
Calendly.initInlineWidget({
    url: 'https://calendly.com/valentinovono/entretiens',
    parentElement: document.getElementById('calendly'),
    prefill: {},
    utm: {}
   });

active_calandy.forEach(btn =>{
    btn.addEventListener("click",() =>{
        content_calandly.classList.toggle("active");
    })
})
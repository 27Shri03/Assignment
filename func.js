window.addEventListener("scroll", ()=>{
    let header = document.querySelector('#head');
    header.classList.toggle("sticky", window.scrollY>0);
})

let counter  = 1;
setInterval(function () {
    document.getElementById('radio'+counter).checked = true;
    counter++;
    if (counter>4) {
        counter = 1;
    }
}, 5000);
const clock = document.querySelector('.bar_clock');



// Clock
const getTime = setInterval(()=>{
    let time = new Date().toLocaleTimeString();
    clock.innerText = time;
},1000)


let ptimer = {
    time: null,
    go: null,
    init: function() {
        ptimer.time = document.getElementById("time");
        ptimer.go = document.getElementById("go");

        ptimer.go.addEventListener("click",ptimer.start);
        ptimer.go.disabled = false;
    },

    timer: null,
    now: 1500,
    tick: function(){
        ptimer.now--;
        let remain = ptimer.now;
        let mins = Math.floor(remain/60);
        remain -= mins * 60;
        let secs = remain;
        if (mins<10) {mins="0"+mins;}
        if (secs<10) {secs="0"+secs};
        ptimer.time.innerHTML = mins+":"+secs;
    },

    start: function() {
        ptimer.timer = setInterval(ptimer.tick, 1000);
        ptimer.go.value = "Pause";
        ptimer.go.removeEventListener("click",ptimer.start);
        ptimer.go.addEventListener("click",ptimer.pause);
    },

    pause: function() {
        clearInterval(ptimer.timer);
        ptimer.timer = null;
        ptimer.go.value = "Continue";
        ptimer.go.removeEventListener("click",ptimer.pause);
        ptimer.go.addEventListener("click", ptimer.start);
    }
};
window.onload = ptimer.init;
  let ptimer = {
    time: null,
    go: null,
    init: function() {
        ptimer.time = document.getElementById("time");
        ptimer.go = document.getElementById("go");

        ptimer.go.addEventListener("click",ptimer.start);
        ptimer.go.disabled = false;
    },

    count: 0,
    timer: null,
    break: false,
    now: 1500,
    tick: function(){       
        ptimer.now--;
        let remain = ptimer.now;
        let mins = Math.floor(remain/60);
        remain -= mins * 60;
        let secs = remain;
        if (mins<10) {mins="0"+mins;}
        if (secs<10) {secs="0"+secs};

        // Count down finish
        if (ptimer.now < 0) {
            // Pomo finish
            if (ptimer.break == false) {
                ptimer.count++;
                ptimer.break = true;
                ptimer.time.style.borderColor = "green";
                //short break
                if (ptimer.count % 4 != 0) {
                    ptimer.now = 300;
                    ptimer.time.innerHTML = "05:00";
                }
                //long break
                else {
                    ptimer.now = 900;
                    ptimer.time.innerHTML = "15:00";
                }
            }
            
            // Break finish
            else {
                ptimer.break = false;
                ptimer.now = 1500;
                ptimer.time.innerHTML = "25:00";
                ptimer.time.style.borderColor = "#D54546";
            }
            return;
        }

        ptimer.time.innerHTML = mins+":"+secs;
    },

    start: function() {
        ptimer.timer = setInterval(ptimer.tick, 1000);
        ptimer.go.value = "Stop";
        ptimer.go.removeEventListener("click",ptimer.start);
        ptimer.go.addEventListener("click",ptimer.stop);
    },

    stop: function() {
        clearInterval(ptimer.timer);
        ptimer.timer = null;
        ptimer.go.value = "Start";
        ptimer.now = 1500;
        ptimer.time.innerHTML = '25:00';
        ptimer.go.removeEventListener("click",ptimer.stop);
        ptimer.go.addEventListener("click", ptimer.start);
        ptimer.time.style.borderColor = "#D54546";
    }


};
window.onload = ptimer.init;
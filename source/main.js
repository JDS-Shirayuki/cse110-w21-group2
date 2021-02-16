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

let pomo1 = document.getElementById('1pomo');
let pomo2 = document.getElementById('2pomo');
let pomo3 = document.getElementById('3pomo');
let pomo4 = document.getElementById('4pomo');

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');

function resetPomo() {
    num1.style.borderRadius = '';
    num2.style.borderRadius = '';
    num3.style.borderRadius = '';
    num4.style.borderRadius = '';

    num1.style.backgroundColor = '';
    num2.style.backgroundColor = '';
    num3.style.backgroundColor = '';
    num4.style.backgroundColor = '';
}

pomo1.onclick = function() {
    resetPomo();
}

pomo2.onclick = function() {
    resetPomo();
    num1.style.backgroundColor = '#D54546';
    num1.style.borderRadius = '50px 0px 0px 50px';
    num2.style.borderRadius = '0px 50px 50px 0px';
    
}

pomo3.onclick = function() {
    resetPomo();
    num1.style.backgroundColor = '#D54546';
    num2.style.backgroundColor = '#D54546';
    num1.style.borderRadius = '50px 0px 0px 50px';
    num2.style.borderRadius = '0px';
    num3.style.borderRadius = '0px 50px 50px 0px'
}

pomo4.onclick = function() {
    resetPomo();
    num1.style.backgroundColor = '#D54546';
    num2.style.backgroundColor = '#D54546';
    num3.style.backgroundColor = '#D54546';
    num1.style.borderRadius = '50px 0px 0px 50px';
    num2.style.borderRadius = '0px';
    num3.style.borderRadius = '0px';
    num4.style.borderRadius = '0px 50px 50px 0px';
}



window.onload = ptimer.init;


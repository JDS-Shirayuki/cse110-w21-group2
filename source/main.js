let fillerIncrement = 425/(25*60);
let fillerHeight = 0;

let nav_bar = document.getElementsByClassName('navbar')[0];
let form = document.getElementById("form_info");
let rate = document.getElementById("rate");
let quote = document.getElementById("quote");
let html = document.documentElement;
let progress = document.getElementById('progress');
let progress_number = document.getElementById("number");
let goal_finish = document.getElementById('goal_finish');
let clock = document.getElementById('timer');

let ptimer = {
    time: null,
    go: null,
    fillerHeight : 0,
    
    filler: null,
    num_radio: null,
    num_text: null,
    pomo_num: 1,

    init: function() {
        ptimer.time = document.getElementById("time");
        ptimer.go = document.getElementById("skip");
        ptimer.filler = document.getElementById("filler");
        ptimer.num_radio = document.getElementsByName("num");
        ptimer.num_text = document.getElementById('num_text')
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
                progress.style.width = (400/ptimer.pomo_num) * (ptimer.count) + 'px';
                progress_number.innerHTML = ptimer.count + ' /  ' + ptimer.pomo_num;

                if (ptimer.count == ptimer.pomo_num) {
                    promptPage();
                    ptimer.resetTimer();
                    return;
                }

                ptimer.break = true;
                breakPage();

                //short break
                if (ptimer.count % 4 != 0) {
                    ptimer.now = 300;
                    ptimer.time.innerHTML = "05 : 00";
                    fillerIncrement = 425/(5*60);
                }
                //long break
                else {
                    ptimer.now = 900;
                    ptimer.time.innerHTML = "15 : 00";
                    fillerIncrement = 425/(15*60);
                }
            }
            
            // Break finish
            else {
                focusPage();
                ptimer.break = false;
                ptimer.now = 1500;
                ptimer.time.innerHTML = "25 : 00";
                fillerIncrement = 425/(25*60);
            }
            return;
        }

        ptimer.time.innerHTML = mins+" : "+secs;
        fillerHeight = fillerHeight + fillerIncrement;
        ptimer.filler.style.height = fillerHeight + 'px';
    },

    start: function() {
        for (let i = 0; i < 5; i++) {
            if (ptimer.num_radio[i].checked) {
                if (i != 4) {
                    ptimer.pomo_num = i+1;
                    this.break;
                }
                else {
                    ptimer.pomo_num = ptimer.num_text.value;
                }
            }
        }
        
        ptimer.go.value = "Stop";
        ptimer.timer = setInterval(ptimer.tick, 1);
        ptimer.go.removeEventListener("click",ptimer.start);
        ptimer.go.addEventListener("click",ptimer.abort);

        progress_number.innerHTML = 0 + ' /  ' + ptimer.pomo_num;

        pomoPage();
    },

    resetTimer: function() {
        clearInterval(ptimer.timer);
        ptimer.timer = null;
        ptimer.now = 1500;
        ptimer.time.innerHTML = '25 : 00';
        fillerHeight = 0;
        fillerIncrement = 425/(25*60);
    },

    finishGoal: function() {
        ptimer.resetTimer();
        promptPage();
        ptimer.go.removeEventListener("click",ptimer.abort);
        ptimer.go.addEventListener("click", ptimer.start);
    },

    abort: function() {
        ptimer.resetTimer();
        ptimer.go.value = "Start";
        ptimer.go.removeEventListener("click",ptimer.abort);
        ptimer.go.addEventListener("click", ptimer.start);
        
        homePage();

        ptimer.count = 0; 
    }
};


function homePage() {
    ptimer.time.style.borderColor = "#D54546";
    html.style.background="linear-gradient(180deg, #FF8A8B 0%, #FFBFAC 100%)"
    nav_bar.style.display='flex';
    rate.style.display = 'none';  
    quote.style.display = 'none';
    form.style.display = 'grid';
    ptimer.go.style.color="#D54546";
    ptimer.filler.style.height = '0px';
    ptimer.filler.style.background = '#81C57C';
    progress.style.width = '0px';
    progress_number.innerHTML = '0 / ' + ptimer.pomo_num;
}

function pomoPage() {
    rate.style.display = 'block';  
    quote.style.display = 'block';
    form.style.display = 'none';
    nav_bar.style.display='none';
}

function breakPage() {
    html.style.background="linear-gradient(180deg, #A5CFA2 0%, #B7CCA4 99.99%, #FFBFAC 100%)"
    ptimer.time.style.borderColor = "#81C57C";
    ptimer.filler.style.background = '#D54546';
    fillerHeight = 0;
    progress.style.background="#81C57C";
    ptimer.go.style.color="#81C57C";
}

function focusPage() {
    html.style.background="linear-gradient(180deg, #FF8A8B 0%, #FFBFAC 100%)"
    ptimer.time.style.borderColor = "#D54546";
    ptimer.filler.style.background = '#81C57C';
    fillerHeight = 0;
    progress.style.background="#D54546";
    ptimer.go.style.color="#D54546";
}

function promptPage() {
    goal_finish.style.display = "block";
    clock.style.display = 'none';
    ptimer.go.style.display = 'none';
}


window.onload = ptimer.init;
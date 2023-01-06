function btn1click() {
    let btn = document.getElementById('btn1');

    if (btn.style.background == "rgb(149, 158, 172)") {
        btn.style.background = "#313a45";
        btn.style.color = "#7c8798";
    } else {
        btn.style.background = "#959eac";
        btn.style.color = "white";
        btn1off()
    }
}

function btn2click() {
    let btn = document.getElementById('btn2');

    if (btn.style.background == "rgb(149, 158, 172)") {
        btn.style.background = "#313a45";
        btn.style.color = "#7c8798";
    } else {
        btn.style.background = "#959eac";
        btn.style.color = "white";
        btn2off()
    }
}

function btn3click() {
    let btn = document.getElementById('btn3');

    if (btn.style.background == "rgb(149, 158, 172)") {
        btn.style.background = "#313a45";
        btn.style.color = "#7c8798";
    } else {
        btn.style.background = "#959eac";
        btn.style.color = "white";
        btn3off()
    }
}

function btn4click() {
    let btn = document.getElementById('btn4');

    if (btn.style.background == "rgb(149, 158, 172)") {
        btn.style.background = "#313a45";
        btn.style.color = "#7c8798";
    } else {
        btn.style.background = "#959eac";
        btn.style.color = "white";
        btn4off()
    }
}

function btn5click() {
    let btn = document.getElementById('btn5');

    if (btn.style.background == "rgb(149, 158, 172)") {
        btn.style.background = "#313a45";
        btn.style.color = "#7c8798";
    } else {
        btn.style.background = "#959eac";
        btn.style.color = "white";
        btn5off()
    }
}

function btn1off() {
    var btn = document.getElementById('btn2');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn3');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn4');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn5');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
}

function btn2off() {
    var btn = document.getElementById('btn1');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn3');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn4');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn5');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
}

function btn3off() {
    var btn = document.getElementById('btn1');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn2');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn4');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn5');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
}

function btn4off() {
    var btn = document.getElementById('btn1');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn2');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn3');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn5');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
}

function btn5off() {
    var btn = document.getElementById('btn1');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn2');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn3');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
    var btn = document.getElementById('btn4');
    btn.style.background = "#313a45";
    btn.style.color = "#7c8798";
}

function submit() {
    var main = document.querySelector('main')
    var top = document.querySelector('.top');
    var btns = document.querySelector('.buttons')
    var sub = document.querySelector('.submit')
    var buttons = [
        document.getElementById('btn1'),
        document.getElementById('btn2'),
        document.getElementById('btn3'),
        document.getElementById('btn4'),
        document.getElementById('btn5')
    ];
    let counter = 0;
    for (index in buttons) {
        let btn = buttons[index];
        if (btn.style.background == "rgb(149, 158, 172)") {
            top.remove();
            btns.remove();
            sub.remove();
            let num = btn.innerText;
            main.innerHTML = '<div class="thankyou"><img src="/images/illustration-thank-you.svg" alt=""><p class="selection">You selected ' + num + ' out of 5</p><h1>Thank you!</h1><p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p></div>';
        } else {
            ++counter;
        }
    }
    if (counter == buttons.length) {
        let error = document.getElementById('err');
        error.style.opacity = '1';
        setTimeout(() => {
            error.style.opacity = '0';
        }, 2000);
    }
}
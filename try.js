var a = document.querySelector(".apple");
var sh = document.querySelector(".sh");
var l = document.querySelector(".heart");
var count = 0;
const n = "Akshay";
const s = "Chinnu";
var i = 0;

function move() {
    l.style.visibility = "visible";
    if (count < 50) {
        l.style.marginTop = `${count}px`;
        count += 5;
    } else {
        l.style.alignSelf = "center";
        l.style.marginTop = 0;
    }
}

function higher() {
    l.style.width = "28%";
    l.style.height = "19vh";
}

function lower() {
    l.style.width = "30%";
    l.style.height = "20vh";
}

function heartbeat(cnt) {
    if (cnt % 2 == 0) {
        higher();
    } else {
        lower();
    }
    cnt += 1;
    return cnt;
}

function displayNextCharacter() {
    if (i < n.length) {
        a.innerHTML += n[i];
        sh.innerHTML += s[i];
        i++;
    } else {
        clearInterval(intervalId);
        setInterval(move, 400);
        let cnt = 0;
        setInterval(() => {
            cnt = heartbeat(cnt);
        }, 700);
    }
}

var intervalId = setInterval(displayNextCharacter, 400);

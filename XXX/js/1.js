function bb() {
    document.body.style.backgroundColor = "#0000ff";
}
function bg() {
    document.body.style.backgroundColor = "#00ff00";
}
function br() {
    document.body.style.backgroundColor = "#ff0000";
}
let colorIndex = 0;
function p5() {
    setInterval(function () {
    switch(colorIndex) {
        case 0:
        bb();
        break;
        case 1:
        bg();
        break;
        case 2:
        br();
        break;
    }
    colorIndex = (colorIndex + 1) % 3;
    }, 100);
}
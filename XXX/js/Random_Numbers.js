function num() {
    var randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById("output").innerText = randomNum;
}
// Math.random()：生成一个 0 到 1（不包括 1）之间的随机小数。
// Math.random() * 100：将随机小数扩大到 0 到 100 之间（不包括 100）。
// Math.floor(...)：向下取整，得到 0 到 99 之间的整数。
// + 1：确保最终的随机数在 1 到 100 之间。
// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "50%";
dodger.style.justifyContent = "50%"


// moveDodgerLeft()
// moveDodgerRight()


function moveDodgerLeft() {
    const position = dodger.style.left;
    const left = parseInt(position, 10);
    if (left > 0) { dodger.style.left = `${left - 5}px`; }
}

function moveDodgerRight() {
    const position = dodger.style.left;
    const right = parseInt(position, 10);
    if (right > 0) { dodger.style.left = `${right +  5}px`;}
}


document.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") { moveDodgerLeft(); } });
document.addEventListener("keydown", function (e) { if (e.key === "ArrowRight") { moveDodgerRight(); } });

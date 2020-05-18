
// Canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


// First Draw Player
setTimeout(function () {
    ctx.beginPath();
    ctx.arc(15, 15, 15, 0, 2 * Math.PI);
    ctx.fill();
}, 300)

// First Draw Mine
setTimeout(createMine, 300)
// Starting values 
var xPlayer = 15
var yPlayer = 15

//  Clear Canvas Command
// ctx.clearRect(0, 0, canvas.width, canvas.height);


// Event
document.addEventListener('keydown', movePlayer)

function movePlayer(e) {
    if (e.keyCode === 40 && (canvas.height - 15) > yPlayer) {
        // Clear 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw Mine 
        drawMine()
        // Draw player
        ctx.beginPath();
        ctx.arc(xPlayer, yPlayer + 15, 15, 0, 2 * Math.PI);
        ctx.fillStyle = 'black'
        ctx.fill();
        yPlayer += 15
    }
    else if (e.keyCode === 39 && (canvas.width - 15) > xPlayer) {
        // Clear 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw Mine
        drawMine()
        // Draw player
        ctx.beginPath();
        ctx.arc(xPlayer + 15, yPlayer, 15, 0, 2 * Math.PI);
        ctx.fillStyle = 'black'
        ctx.fill();
        xPlayer += 15
    }
    else if (e.keyCode === 38 && (yPlayer > 15)) {
        // Clear 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw Mine
        drawMine()
        // Draw Player
        ctx.beginPath();
        ctx.arc(xPlayer, yPlayer - 15, 15, 0, 2 * Math.PI);
        ctx.fillStyle = 'black'
        ctx.fill();
        yPlayer -= 15
    }
    else if (e.keyCode === 37 && xPlayer > 15) {
        // Clear 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw Mine
        drawMine()
        // Draw Player
        ctx.beginPath();
        ctx.arc(xPlayer - 15, yPlayer, 15, 0, 2 * Math.PI);
        ctx.fillStyle = 'black'
        ctx.fill();
        xPlayer -= 15
    }
    setTimeout(checkOverlap, 50)
}


// Mine Creation
var xMine = 0
var yMine = 0
function createMine() {

    generate()
    if (xMine < (canvas.width - 15) && yMine < (canvas.height - 15)) {
        ctx.beginPath();
        ctx.arc(xMine, yMine, 15, 0, 2 * Math.PI);
        ctx.fillStyle = 'red'
        ctx.fill();
    }
    else {
        createMine()
    }
}

function drawMine() {
    ctx.beginPath();
    ctx.arc(xMine, yMine, 15, 0, 2 * Math.PI);
    ctx.fillStyle = 'red'
    ctx.fill();
}

function checkOverlap() {
    if (xMine === xPlayer && yMine === yPlayer) {
        alert('U Landed On A Mine ')
        createMine()
    }
}

function generate() {
    xMine = 15 * (Math.ceil(Math.random() * 60))
    yMine = 15 * Math.ceil(Math.random() * 15)
}


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
        clearBoard();
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
        clearBoard();
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
        clearBoard();
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
        clearBoard();
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

function clearBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Mine Creation

var xMine = 0
var yMine = 0

function generateMineXY() {
    xMine = 15 * (Math.ceil(Math.random() * 100))
    yMine = 15 * Math.ceil(Math.random() * 100)
}

function createMine() {
    generateMineXY()

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
var record = 0
var content = document.getElementById('content')
var h1Scored = document.getElementById('score')
function checkOverlap() {
    if (xMine === xPlayer && yMine === yPlayer) {
        alert('U Landed On A Mine ')
        createMine()
        record++
        h1Scored.textContent = `your score is ${record}`
        content.appendChild(h1Scored)
        storeData()
    }
}

function storeData() {
    localStorage.setItem('score', JSON.stringify(record))
}

window.onload = function (e) {
    let temp = localStorage.getItem('score')
    if (!temp) {
        return
    }
    record = JSON.parse(temp)
    h1Scored.textContent = `your score is ${record}`
    content.appendChild(this.h1Scored)
}

const btn = document.getElementById('btn')
btn.onclick = function (e) {
    record = 0
    localStorage.setItem('score', record)
    h1Scored.textContent = `your score is ${record}`
    content.appendChild(h1Scored)
}
